type BuildUrlProps = {
    page: number,
    pathname: string,
    search: string
}

export const buildUrl = ({page, pathname, search}: BuildUrlProps) => {
    const searchParams = new URLSearchParams(search);

    searchParams.set("page", page.toString());

    return `${pathname}?${searchParams.toString()}`;
}

type BuildPrevAndNextUrlProps = {
    page: number,
    pathname: string,
    search: string,
    lastPage: number
}

export const buildPrevAndNextUrl = ({
    page,
    pathname,
    search,
    lastPage
}: BuildPrevAndNextUrlProps): { prevUrl: string, nextUrl: string } => {
    let prevPage = page - 1;
    if (prevPage < 1) prevPage = lastPage;
    const prevUrl = buildUrl({page: prevPage, pathname, search});
    let nextPage = page + 1;
    if (nextPage >= lastPage) nextPage = 1;
    const nextUrl = buildUrl({page: nextPage, pathname, search});
    return {prevUrl, nextUrl};
}