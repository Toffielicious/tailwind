const Footer2 = () => {
    return (
        <>
            <div class="flex flex-col md:flex-row justify-center md:gap-40">
                <div class="flex flex-row pb-4">
                    <img src="govphseal.png" class="pt-2 flex h-40" />
                    <div className="">
                        <p class="text-sssm font-bold text-blackish p-ft pb-2 pt-5">Republic of the Philippines</p>
                        <div class="flex flex-col gap-2">
                            <p class="text-graytext text-ssssm pt-2">All content is in the public domain unless<br />otherwise stated.</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 md:mt-0 md:ml-8">
                    <p class="text-sssm font-bold text-blackish p-ft  pb-2">About GOVPH</p>
                    <div class="flex flex-col gap-1">
                        <p class="text-graytext text-ssssm pt-2">Learn more about the Philippine government, its <br />structure, how government works and the people behind<br /> it.</p>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Official Gazette</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Open Data Portal</a>
                    </div>
                </div>
                <div class="mt-8 md:mt-0 md:ml-8">
                    <p class="text-sssm font-bold text-blackish p-ft  pb-2">Government links</p>
                    <div class="flex flex-col pt-2 space-y-2">
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Office of the President</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Office of the Vice President</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Senate of the Philippines</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">House of Representatives</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Supreme Court</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Court of Appeals</a>
                        <a href="" class="text-grayest text-ssssm select-none hover:underline hover:cursor-pointer">Sandiganbayan</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer2
