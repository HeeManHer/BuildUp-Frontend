export async function getBacklog() {

    const URL = "http://localhost:8888/api/v1/backlogs";

    return await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        }
    }).then(response => response.json());

}

export async function postBacklog(backlog) {

    const URL = "http://localhost:8888/api/v1/backlogs";

    return await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(backlog)
    });

}

export async function putBacklog(backlog) {

    const URL = "http://localhost:8888/api/v1/backlogs";

    return await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
        body: JSON.stringify(backlog)
    });


}

export async function deleteBacklog(backlogNo) {

    const URL = `http://localhost:8888/api/v1/backlogs/${backlogNo}`;

    return await fetch(URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
    });

}
export async function searchBacklog(searchValue) {

    const URL = "http://localhost:8888/api/v1/backlogs/search?search=" + searchValue;

    return await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
        },
    }).then(response => response.json());

}

