import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '..'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function postForm({post}) {
    // Agar hme kisi bhi form me hme continiously watch karna ho to hm directly yeha se ik method ke through kar sakte hai
    // agar hme koi value form ke ander set karni ho hm "Value" likh kar nhi karte hai kyuki hm react ka form use kar rhe hai
    // hme ye directly form ko control ka access deta hai or sare value hm yehi se pass karenge
    // "getValue" medhod se jitna value chahiye hm le sakte hai
    // hm "useForm" ke ander actually object bhi pass kar sakte hai jo value hm chahe de sakte hai yeha pe
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            // default value me agr user 1st time me aaya to thik hai hm empaty rakh sakte hai but agar user edit ya update karne aaye to hm uske liye query use karna padega

            title: post?.title || '',
            slug: post ?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate();
    // here we gat useData value
    const userData = useSelector( state => state.auth.userData)

    // when form is submit then user pass the data in form of object
    const submit = async (data) => {
        // yeha agar "post" hogi to update karenge nhi hogi to create karenge
        if (post) {
            // update in file (matlab hm file lenge or uploade kar denge yehi to update hai)
            // "post.image[0]" ka matlab hai hm post ka id hi o save karenge
            const file = data.image[0] ? appwriteService.uploadFile(post.image[0]): null
            // agar file upload hog gae hai to purane file ko delete bhi to karna hoga
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            // agar hmara old file delete ho gya hai to usko update to karna pdega 
            // yeha update ke liye to slug pass akrna padega to slug mera id hi to hai
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? post.$id : undefined, // yeha hme id return hua hai
                if (dbPost) {
                    navigate(`/post${dbPost.$id}`)
                    
                }
            })
            
            
        }else{
            const file = await appwriteService.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id //get File id
                data.featuredImage = fileId // update fileId into featuredImage
                // jab file ki id mil gya to sare data bhej do
                const dbPost =await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })
                if (dbPost) {
                    navigate(`/post/${post.$id}`);
                }
                
            }
        }
    }

    // "slugTransformation" :- ik value ko watch karna oe dusre me generate karna
    const slugTransform = useCallback( (value) => {
        // if (value && typeof value === 'string') {
        //     const slug = value.toLocaleLowerCase().replace(/ /g, '-')
        //     setValue('slug', slug)
        //     return slug
        // }

        // ----> Both code are same <-----

        return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z/d\s]+/g, '-')
            .replace(/\s/g, '-')

    }, [])

    // upper jo method bana hai ab usko use karna hai 
    React.useEffect( () => {
        const subscription = watch( (value, {name}) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title,{shouldValidate:true}))
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default postForm
