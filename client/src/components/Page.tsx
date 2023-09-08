import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";

export const Page: ParentComponent<{}> = (props) => {

    return <div class="flex flex-col bg-black/90 h-screen text-white">
        <header class="flex p-2 px-4 text-2xl justify-between bg-blue-400/60">
            <h1>
                {`<👖/>`} Template
            </h1>
            <nav class="flex gap-4">
                <A href="/" class="hover:underline">
                    Home
                </A>
                <A href="/about" class="hover:underline">
                    About
                </A>
            </nav>
        </header>
        <main class="p-8">{props.children}</main>
    </div>;
};