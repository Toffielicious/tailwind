const Footer2 = () => {
    return (
        <>
            <div className=" flex flex-row justify-center gap-40">
                <div className="flex flex-row">
                    <img src="govphseal.png" class="pt-2 flex h-48" />
                    <div>
                        <p className="text-sssm font-bold text-blackish p-ft uppercase pb-2 pt-8">Republic of the Philippines</p>
                        <div class="flex flex-col gap-2">
                            <p className="text-graytext text-ssssm pt-2">All content is in the public domain unless<br></br> otherwise stated.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-sssm font-bold text-blackish p-ft uppercase pb-2 pt-8">About GOVPH</p>
                    <div class="flex flex-col gap-1 ">
                        <p className="text-graytext text-ssssm pt-2">Learn more about the Philippine government, its <br></br>structure, how government works and the people behind<br></br> it.</p>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Official Gazette</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Open Data Portal</a>
                    </div>
                </div>
                <div className="">
                    <p className="text-sssm font-bold text-blackish p-ft uppercase pb-2 pt-8">Government links</p>
                    <div class="flex flex-col pt-2 space-y-2">
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Office of the President</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Office of the Vice President</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Senate of the Philippines</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">House of Representatives</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Supreme Court</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Court of Appeals</a>
                        <a href="" className="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Sandiganbayan</a>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Footer2
