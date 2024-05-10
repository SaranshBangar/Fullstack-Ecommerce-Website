import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
    return (
        <footer className="bg-white h-20 relative">
            <MaxWidthWrapper>
                <div
                    className="border-t border-gray-200"
                />

                <div className="h-full flex flex-col md:flex-row md:justify-between"></div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer