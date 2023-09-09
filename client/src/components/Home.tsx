import { Component, createResource } from "solid-js";
import { Page } from "./Page";
import { API_URL } from "..";

type Response = {
    message: string;
}

export const Home: Component<{}> = (props) => {

    const [response] = createResource<Response>(() =>
        fetch(`${API_URL}/api`).then((res) => res.json())
    );

    const message = () => response.loading ? "Loading" : response.error ? "Error" : response()?.message;

    return <Page>
        <h2>Home Page</h2>
        Message from server: {message()}
    </Page>;
};