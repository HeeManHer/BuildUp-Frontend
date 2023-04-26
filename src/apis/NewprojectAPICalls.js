export async function getProject(employeeNo) {
    const URL = "http://43.201.211.175:8888/api/v1/" + employeeNo + "/projects";

    return await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    }).then(response => response.json());
}



export async function postProject(project) {
    const URL = "http://43.201.211.175:8888/api/v1/projects";
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: JSON.stringify(project)
    });
}

export async function getProjectDetail(projectNo) {
    const URL = "http://43.201.211.175:8888/api/v1/projects/" + projectNo;

    return await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
        }
    }).then(response => response.json()).then(data => data.data[0]);
}


export async function searchMember(search) {

    const URL = "http://43.201.211.175:8888/api/v1/projects/search?search=" + search;

    return await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
    }).then(response => response.json());

}