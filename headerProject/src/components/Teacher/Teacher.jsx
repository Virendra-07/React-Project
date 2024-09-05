import React from 'react'

const teacherData = [
    {
        name: 'Teacher 1',
        email: 'teacher1@example.com',
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    },
    {
        name: 'Teacher 2',
        email: 'teacher2@example.com',
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    },
    {
        name: 'Teacher 3',
        email: 'teacher3@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    },
    {
        name: 'Teacher 4',
        email: 'teacher4@example.com',
        image:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    },
    {
        name: 'Teacher 5',
        email: 'teacher5@example.com',
        image:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    },
    {
        name: 'Teacher 6',
        email: 'teacher6@example.com',
        image:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    },
    {
        name: 'Teacher 7',
        email: 'teacher7@example.com',
        image:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        qualification: "MSc(Maths)"
    }
]

const teacherFile = [
    {
        fileName: 'abc1',
        fileExtention: 'doc'
    },
    {
        fileName: 'abc2',
        fileExtention: 'doc'
    },
    {
        fileName: 'abc3',
        fileExtention: 'doc'
    },
    {
        fileName: 'abc4',
        fileExtention: 'doc'
    },
    {
        fileName: 'abc5',
        fileExtention: 'doc'
    },
    {
        fileName: 'abc6',
        fileExtention: 'doc'
    },
]

function Teacher() {
  return (
    <div>
    <ul className=' divide-y divide-gray-200'>
        {teacherData.map( (personData) => (
            <li key={personData.email} className='py-4 flex'>
                <img className='h-24 w-24 rounded-full ml-16' src={personData.image} alt="image" />
                <div className='ml-10 mt-4'>
                    <p className='text-sm font-medium text-gray-900 ml-8'>Name : {personData.name}</p>
                    <p className='text-sm font-medium text-gray-900 ml-8'>Email : {personData.email}</p>
                    <p className='text-sm font-medium text-gray-900 ml-8'>Qual : {personData.qualification}</p>
                </div> 
            </li>
        ))}
        <div className='ml-10'>
                {teacherFile.map( (data) => (
            <li key={data.fileName}>
                <div>
                    <p>File Name : {data.fileName}</p>
                    <p>File Extention : {data.fileExtention}</p>
                </div>

            </li>
        ))}
                </div>
        
    </ul>
    </div>

    
  )
}

export default Teacher
