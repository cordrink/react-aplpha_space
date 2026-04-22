import {buildPrevAndNextUrl, buildUrl} from "@/utils/pagination.ts";
import {useLoaderData, useLocation} from "react-router-dom";
import type {HubbleImagesResponseWithParams, NewsResponseWithParams} from "@/utils/types.ts";
import {type ReactNode} from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {objectsPerPage} from "@/utils/constants.ts";

export const PaginationContainer = () => {
    const {response} = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams;
    const {pathname, search} = useLocation();
    const searchParams = new URLSearchParams(search);

    const pageFromUrl: string | null = searchParams.get("page");
    const firstPage: number = 1;

    let activePage: number;
    if (!pageFromUrl) {
        activePage = 1;
    } else {
        activePage = parseFloat(pageFromUrl);
    }

    let objectInTotal: number;
    if ("total_count" in response) {
        objectInTotal = response.total_count;
    } else {
        objectInTotal = response.count;
    }

    let lastPage: number;
    if (objectInTotal === 0) {
        lastPage = 0;
    } else if (objectInTotal % objectsPerPage === 0) {
        lastPage = objectsPerPage / objectsPerPage;
    } else {
        lastPage = Math.ceil(objectInTotal / objectsPerPage);
    }

    const {prevUrl, nextUrl} = buildPrevAndNextUrl({page: activePage, pathname, search, lastPage});

    const buildBtn = ({page, isActive}: { page: number, isActive: boolean }): ReactNode => {
        const url = buildUrl({page, pathname, search});
        return (
            <PaginationItem key={page}>
                <PaginationLink to={url} isActive={isActive} size={"default"}>{page}</PaginationLink>
            </PaginationItem>
        )
    }

    const buildDots = (key: string): ReactNode => {
        return (
            <PaginationItem key={key}>
                <PaginationEllipsis></PaginationEllipsis>
            </PaginationItem>
        )
    }

    const buildContent = (): ReactNode => {
        const pages: ReactNode[] = [];
        //first page
        pages.push(buildBtn({page: firstPage, isActive: activePage === firstPage}));
        //ellipse
        if (activePage > 2) {
            pages.push(buildDots("dots-1"))
        }
        //active page
        if (activePage !== firstPage && activePage !== lastPage) {
            pages.push(buildBtn({page: activePage, isActive: activePage === activePage}));
        }
        //ellipse
        if (activePage < lastPage - 1) {
            pages.push(buildDots("dots+1"))
        }
        //last page
        pages.push(buildBtn({page: lastPage, isActive: activePage === lastPage}));
        return pages;
    }

    if (lastPage < 2) {
        return null;
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious to={prevUrl} size={"default"}></PaginationPrevious>
                </PaginationItem>
                {buildContent()}
                <PaginationItem>
                    <PaginationNext to={nextUrl} size={"default"}></PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
