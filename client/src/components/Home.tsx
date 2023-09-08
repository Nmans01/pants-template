import { Component, createResource } from "solid-js";
import { Page } from "./Page";

type Response = {
    message: string;
}

export const Home: Component<{}> = (props) => {

    const [response] = createResource<Response>(() =>
        fetch("http://localhost:3000/api").then((res) => res.json())
    );

    const message = () => response.loading ? "Loading" : response.error ? "Error" : response()?.message;

    return <Page>
        <h2>Home Page</h2>
        Message from server: {message()}
    </Page>;
};