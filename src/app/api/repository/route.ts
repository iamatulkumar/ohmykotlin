import {NextResponse} from "next/server";
import {db} from "@/app/lib/db";

export async function POST(req: Request) {

     const requestList = await req.json();

     for (const request of requestList) {
         const {name, githubUrl, repoTag, customTag} = request;
             await db.repository.create({
                 data: {
                     name: name,
                     githubUrl: githubUrl,
                     repoTag: repoTag,
                     customTag: customTag,
                 },
             })
     }

    return NextResponse.json(
        { message: "Repository created successfully" },
        { status: 200 },
    );
}


/*export async function GET() {
    // Get all the network Repo
    const repoList = await db.repository.findMany({
        where: {
            repoTag: { hasSome: ['serializer'] }
        }
    });

    for (const request of repoList) {
        const {name, githubUrl, repoTag, customTag} = request;
        const result = await fetch(`https://api.github.com/repos/${name}`, {
            method: "GET",
            headers: {
                accept: "application/json",
                authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28"
            },
            next: {
                revalidate: 0,
            },
        });

        const responseResult = await result.json();
        await saveToDb(responseResult, repoTag, customTag);

    }

    return NextResponse.json(
        { user: "dbSave", message: "User already register with the email" },
        { status: 200 },
    );
}*/

async function saveToDb(result: any, repoTag: string[], customTag: string[]) {
    return db.data.create({
        data: {
            name: result.name,
            full_name: result.full_name,
            owner: {
                login: result.owner.login,
                avatar_url: result.owner.avatar_url,
                gravatar_id: result.owner.gravatar_id,
                html_url: result.owner.html_url,
                type: result.owner.type,
            },
            html_url: result.html_url,
            description: result.description,
            tags_url: result.tags_url,
            created_at: result.created_at,
            updated_at: result.updated_at,
            pushed_at: result.pushed_at,
            clone_url: result.clone_url,
            svn_url: result.svn_url,
            homepage: result.homepage?result.homepage:"",
            size: result.size,
            stargazers_count: result.stargazers_count,
            watchers_count: result.watchers_count,
            language: result.language,
            forks_count: result.forks_count,
            open_issues_count: result.open_issues_count,
            license_name: {
                key: result?.license?.key?result.license.key:"",
                name: result?.license?.name?result.license.name:"",
            },
            topics: result.topics,
            visibility: result.visibility,
            forks: result.forks,
            open_issues: result.open_issues,
            watchers: result.watchers,
            default_branch: result.default_branch,
            network_count: result.network_count,
            subscribers_count: result.subscribers_count,
            repoTag: repoTag,
            customTag: customTag,
            latestTag:""
        },
    });

}

// export async function GET() {
//     const repoList:any = await db.data.findMany()
//
//     for (const request of repoList) {
//     const result = await fetch(request.tags_url, {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//             "X-GitHub-Api-Version": "2022-11-28"
//         },
//         next: {
//             revalidate: 0,
//         },
//     });
//
//     const responseResult = await result.json();
//     await db.data.update({
//         where: {
//             id: request.id
//         },
//         data: {
//             latestTag: responseResult[0].name
//         }
//     })
//     }
//
//     for (const request of repoList) {
//         const {name, githubUrl, repoTag, customTag} = request;
//         const result = await fetch(`https://api.github.com/repos/${name}`, {
//             method: "GET",
//             headers: {
//                 accept: "application/json",
//                 authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//                 "X-GitHub-Api-Version": "2022-11-28"
//             },
//             next: {
//                 revalidate: 0,
//             },
//         });
//
//         const responseResult = await result.json();
//         await saveToDb(responseResult, repoTag, customTag);
//
//     }
//
//     return NextResponse.json(
//         { user: "responseResult", message: "User already register with the email" },
//         { status: 200 },
//     );
// }

export async function GET() {
    const repoList:any = await db.data.findMany()

    return NextResponse.json(
        { user: repoList, message: "User already register with the email" },
        { status: 200 },
    );
}
