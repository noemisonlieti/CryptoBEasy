export default function InputUploadFile({title, text , id }){

    return(

        <div className='flex items-center justify-center w-full'>

            <label htmlFor={id} className='flex flex-col items-center justify-center w-full h-32 rounded-xl cursor-pointer bg-CardBgGlasDark drop-shadow-DrsCustom'>
                

                <div className='flex flex-col items-center justify-center pb-5 pt-5'>

                    <p className='mb-3 text-DeepBlue font-bold'>{title}</p>

                    <p className='text-sm  text-DeepBlue'>Tap here to upload your {text}</p>

                </div>

                <input id={id} type="file" className='hidden'/>
                

            


            </label>

        </div>
    )
}