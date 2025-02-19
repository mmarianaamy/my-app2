import Image from "next/image";
export default function page1() {
    return (
        <div>
            <div className="flex flex-row items-center justify-between p-20 m-16 border rounded-lg">
                <Image src="/pig.jfif" alt="pig" width={200} height={200}/>
                <p>Lorem impsum</p>
            </div>
            <div className="flex flex-row-reverse items-center justify-between p-20 m-16 border rounded-lg">
                <Image src="/pig.jfif" alt="pig" width={200} height={200}/>
                <p>Lorem impsum</p>
            </div>
            <div className="flex flex-row items-center justify-between p-20 m-16 border rounded-lg">
                <Image src="/pig.jfif" alt="pig" width={200} height={200}/>
                <p>Lorem impsum</p>
            </div>
        </div>
    );
}