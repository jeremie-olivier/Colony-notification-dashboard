import React from "react";
import { Link } from "react-router-dom";

export const AdminOptions = () => {
    return (
        <section>
            <div className="flex justify-center items-center mt-20 gap-24">
                <Link to={`./notificiationsSubscription/list`}>

                    <div className="border-solid border-2 border-slate-300 h-[200px] w-[350px] p-5 rounded-md">
                        <div className="flex items-center mt-4">
                            <div className="w-12 h-12">
                                <p className="text-3xl font-bold ">Manage your notifications</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="./users/list">
                    <div className="border-solid border-2 border-slate-300 h-[200px] w-[350px] p-5 rounded-md">
                        <div className="flex justify-center items-center mt-4 mb-4">
                            <div className="flex justify-center items-center">
                                <p className="text-3xl font-bold ">Manage your users</p>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>

        </section>

    );
};
