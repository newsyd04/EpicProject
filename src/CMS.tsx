import React, { useState } from 'react';
import Nav from './Nav';

interface User {
  id: number;
  name: string;
  role: string;
}

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
}

interface Module {
  id: number;
  title: string;
  startDate: string;
}

const CMS: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', role: 'Student' },
    { id: 2, name: 'Jane Doe', role: 'Teacher' },
  ]);
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, title: 'Math Homework', dueDate: '2024-03-10' },
    { id: 2, title: 'Science Project', dueDate: '2024-03-15' },
  ]);

  const [modules, setModules] = useState<Module[]>([
    { id: 1, title: 'CS4421', startDate: '2024-03-01'},
    { id: 2, title: 'CS4452', startDate: '2024-03-05'},
  ]);
  
  const [moduleTitle, setModuleTitle] = useState('');
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [moduleStartDate, SetModuleStartDate] = useState('');

  let nextModuleId = modules.length + 1;

  const handleModuleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newModule: Module = { id: nextModuleId++, title: moduleTitle , startDate: moduleStartDate};
    setModules(prevModules => [...prevModules, newModule]);
    setModuleTitle('');
    SetModuleStartDate('');
  };

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Find the current highest ID and add 1 to it for the new ID
    const newUserId = users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
    const newUser: User = { id: newUserId, name: userName, role: userRole };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setUserName('');
    setUserRole('');
};

const handleAssignmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Find the current highest ID and add 1 to it for the new ID
    const newAssignmentId = assignments.reduce((maxId, assignment) => Math.max(maxId, assignment.id), 0) + 1;
    const newAssignment: Assignment = { id: newAssignmentId, title: assignmentTitle, dueDate };
    setAssignments(prevAssignments => [...prevAssignments, newAssignment]);
    setAssignmentTitle('');
    setDueDate('');
};


  return (
    <div className='container'>
        <Nav />
        <article className='container CMS-Styling'>
            <div className='container'>
                <h2>Content Management System</h2>
                <hr />
                <h4 id='modules'>Module Titles</h4>
                {modules.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {modules.map(module => (
                        <tr key={module.id}>
                        <td>{module.id}</td>
                        <td>{module.title}</td>
                        <td>{module.startDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                )}
                <h4 id='users'>Users</h4>
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <h4 id='assignments'>Assignments</h4>
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map(assignment => (
                    <tr key={assignment.id}>
                        <td>{assignment.id}</td>
                        <td>{assignment.title}</td>
                        <td>{assignment.dueDate}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </article>
        <article className='CMS-Styling'>
            <h2 id='addnewcontent' className='padding-top'>Add New Content</h2>
            <hr />
            <form onSubmit={handleModuleSubmit}>
                <fieldset className='grid'>
                    <input
                    id="moduleTitle"
                    type="text"
                    placeholder='Enter module title...'
                    value={moduleTitle}
                    onChange={(e) => setModuleTitle(e.target.value)}
                    />
                    <input
                        id="startDate"
                        type="date"
                        placeholder='Enter Start date...'
                        value={moduleStartDate}
                        onChange={(e) => SetModuleStartDate(e.target.value)}
                    />
                    <button type="submit">Add Module</button>
                </fieldset>
            </form>
            <form onSubmit={handleUserSubmit}>
                <fieldset className='grid'>
                    <input
                    id="userName"
                    type="text"
                    placeholder='Enter user name...'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                    id="userRole"
                    type="text"
                    placeholder='Enter user role...'
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    />
                    <button type="submit">Add User</button>
                </fieldset>
            </form>
            <form onSubmit={handleAssignmentSubmit}>
                <fieldset className='grid'>
                    <input
                    id="assignmentTitle"
                    type="text"
                    placeholder='Enter assignment title...'
                    value={assignmentTitle}
                    onChange={(e) => setAssignmentTitle(e.target.value)}
                    />
                    <input
                    id="dueDate"
                    type="date"
                    placeholder='Enter due date...'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                    <button type="submit">Add Assignment</button>
                </fieldset>
            </form>
        </article>
    </div>
  );
}

export default CMS;
