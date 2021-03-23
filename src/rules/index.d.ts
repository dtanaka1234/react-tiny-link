declare const _default: (url: string, httpClient: any, defaultMedia: string[]) => Promise<{
    title: string;
    description: string;
    image: any[];
    video: (string | string[])[];
    url: string;
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
} | {
    title: string;
    description: string;
    url: string;
    video: any[];
    image: (string | string[])[];
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
} | {
    title: any;
    content: string;
    url: string;
    description: any;
    video: any;
    image: any[];
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
} | {
    title: string;
    description: any;
    url: any;
    video: string[];
    image: any[];
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
    publisher: string[];
} | {
    title: any;
    content: any;
    url: any;
    description: any;
    video: any[];
    image: any[];
    type: import("../ReactTinyLinkTypes").ReactTinyLinkType;
}>;
export default _default;
