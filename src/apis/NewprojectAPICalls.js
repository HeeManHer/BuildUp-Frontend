export async function getProject() {
    const URL="http://localhost:8888/api/v1/projects";

    return await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());
    }



export async function postProject(project) {
    const URL="http://localhost:8888/api/v1/projects";
    await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body: JSON.stringify(project)
        }).then(response => response.json());
    }

    export async function getProjectDetail(projectNo) {
        const URL="http://localhost:8888/api/v1/projects/"+projectNo;
    
        return await fetch(URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
                }
            }).then(response => response.json()).then(data=>data.data[0]);
        }
