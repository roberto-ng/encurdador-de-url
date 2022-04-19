import { nanoid } from 'nanoid/async'

export type Url = {
    link: string,
    linkCurto: string,
}

export async function gerarLinkCurto(tamanho = 13) {
    return await nanoid(tamanho);
}

export function isValidURL(url: string) {
    const regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regex.test(url)
}