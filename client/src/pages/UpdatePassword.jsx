import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { url } from '..';

function UpdatePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(url+'/api/v1/auth/updatepassword',
            { oldPassword,newPassword},
             {
            headers: {
              'Content-Type': 'application/json',
            },});
            console.log(response.data)
        } catch (error) {
          console.log(error.message);
        }
      };
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Update Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="oldpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Old Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="oldpassword"
                                    name="oldpassword"
                                    type="password"
                                    autoComplete="oldpassword"
                                    required
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="******"
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                            <label htmlFor="newpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                New Password
                            </label>
                                <input
                                    id="newpassword"
                                    name="newpassword"
                                    type="newpassword"
                                    autoComplete="newpassword"
                                    required
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="******"
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update Password
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                       Not Register yet ? {' '}
                        <Link to={"/register"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default UpdatePassword
