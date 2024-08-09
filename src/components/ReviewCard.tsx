import {marqueImg} from "../utils";

const ReviewCard = ({name, image, review} : any) => {
    return (
        <div
            className={
                "review-card bg-opacity-10 bg-primary/[0.2] h-fit " +
                "pt-4 border sm:px-10 p-6 flex flex-col w-80 rounded-3xl sm:gap-6 gap-4"
            }
        >
            <div
                className={"flex flex-row gap-3 items-center justify-start"}
            >
                <img
                    src={image}
                    alt=""
                    className={"rounded-full"}
                />
                <p className={"font-[600]"}>{name}</p>
            </div>
            <div className={'flex flex-row w-full'}>
                <p className={"ml-1 font-[300] flex flex-row justify-start items-start gap-2"}>
                    <img src={marqueImg} alt='"'/> {review}
                </p>
            </div>
        </div>
    )
}
export default ReviewCard
