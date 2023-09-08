import { Component } from "solid-js";
import { Page } from "./Page";

export const About: Component<{}> = (props) => {

    return <Page>
        <div class="flex flex-col gap-4">
            <h2 class="text-2xl">About PaNTS Stack</h2>
            <h3 class="text-lg">PaNTS Stack includes</h3>
            <ul class="list-disc">
                <li>
                    <a href="https://www.solidjs.com/tutorial/introduction_basics" class="underline">SolidJS</a> - A UI library for building web applications
                </li>
                <li>
                    <a href="https://tailwindcss.com/docs/utility-first" class="underline">TailwindCSS</a> - A utility-first CSS framework for rapidly building custom designs
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" class="underline">Typescript</a> - A typed language which is superset of JavaScript that compiles to plain JavaScript
                </li>
                <li>
                    <a href="https://docs.nestjs.com/controllers" class="underline">NestJS</a> - A Node.js framework for building efficient, reliable and scalable server-side applications
                </li>
                <li>
                    <a href="https://www.prisma.io/docs/getting-started/quickstart#2-model-your-data-in-the-prisma-schema" class="underline">Prisma</a> - An Object Relational Mapping for Node.js and TypeScript
                </li>
            </ul>
            <p></p>
        </div>
    </Page>;
};