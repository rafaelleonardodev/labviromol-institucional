"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { PagedResponse } from "@/utils/types";

type Props<T> = {
  initialItems: T[];
  hasNextPage: boolean;
  currentPage?: number;
  minVisible: number;
  fetchMore?: (page: number) => Promise<PagedResponse<T>>;
  renderItem: (item: T) => React.ReactNode;
  listingStyle?: string;
};

export default function List<T>({
  initialItems,
  hasNextPage: initialHasNextPage,
  currentPage: initialCurrentPage = 1,
  minVisible,
  fetchMore,
  renderItem,
  listingStyle = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
}: Props<T>) {
  const [items, setItems] = useState<T[]>(initialItems);
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
  const [page, setPage] = useState(initialCurrentPage);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const visibleItems = isCollapsed ? items.slice(0, minVisible) : items;
  const hasMore = items.length > minVisible || hasNextPage;
  const showViewMore = hasMore && (isCollapsed || (!isCollapsed && hasNextPage));
  const showViewLess = !isCollapsed && !hasNextPage && items.length > minVisible;

  async function handleViewMore() {
    if (isCollapsed && items.length > minVisible) {
      setIsCollapsed(false);
      return;
    }

    if (fetchMore) {
      setIsLoading(true);
      try {
        const result = await fetchMore(page + 1);
        setItems((prev) => [...prev, ...result.data]);
        setHasNextPage(result.hasNextPage);
        setPage(result.currentPage);
      } finally {
        setIsLoading(false);
      }
    }

    if (isCollapsed) setIsCollapsed(false);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className={listingStyle}>
        {visibleItems.map(renderItem)}
      </div>

      {(showViewMore || showViewLess) && (
        <div className="flex justify-center">
          {showViewLess ? (
            <Button
              variant="outline"
              size="default"
              onClick={() => setIsCollapsed(true)}
              className="gap-2"
            >
              <ChevronUp className="h-4 w-4" />
              {t("common.viewLess")}
            </Button>
          ) : (
            <Button
              variant="outline"
              size="default"
              onClick={handleViewMore}
              disabled={isLoading}
              className="gap-2"
            >
              {isLoading
                ? <Loader2 className="h-4 w-4 animate-spin" />
                : <ChevronDown className="h-4 w-4" />
              }
              {t("common.viewMore")}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}