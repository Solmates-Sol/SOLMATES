import React from 'react'
import { useForm } from 'react-hook-form';

export type TagsData = {
    tags: string;
}

const Tags = () => {
    
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TagsData>();
  return (
    <div className='mt-4'>
        <label className="text-gray-700 text-md font-bold flex-1">
					Add relevant tags 
                    <span className='text-sm text-light-grey ml-1'>
                        (Separate them by commas)
                        </span>
					<textarea
						rows={3}
                        placeholder='Superteam Member, DeFi, GameFi,etc'
						className="border rounded w-full py-1 px-2 font-normal"
						{...register("tags", {
							required: "Field is required",
						})}
					/>
					{errors.tags && (
						<span className="text-red-500 text-sm">
							{errors.tags.message}
						</span>
					)}
				</label>
    </div>
  )
}

export default Tags