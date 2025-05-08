"use client"
export default function Home(){
    async function addData(){
        const res = await fetch("/api/time",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify([{className:"１年",time:100},{className:"二年",time:100}])
        });
       console.log(res);
    }
    return(
        <>
        hello
        <button onClick={addData}>add data</button>
        </>
    )

}