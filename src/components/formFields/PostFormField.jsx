import * as React from "react";

function PostFormField({

}) {
    return (
        <div className="relative flex flex-col max-md:ml-0 max-md:w-full">
            <input
                className=" bg-white border border-solid border-[color:var(--Grey-300,#D0D5DD)];"
                style={{ height: '881px'}}
                placeholder="What do you want to share?"

            />
            <button className="absolute bottom-2 right-2 bg-blue-500 text-white py-2 px-4 rounded">Post</button>
        </div>
    );
}
export default PostFormField;