"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type Props<T> = {
  list: T[];
  showLimit: number;
  buttonText: string;
  renderItem: (item: T) => React.ReactNode;
  listingStyle?: string;
};

export default function List<T>({
  list,
  showLimit,
  buttonText,
  renderItem,
  listingStyle = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
}: Props<T>): React.ReactNode {
  const [showAll, setShowAll] = useState(false);

  const hasMore = list.length > showLimit;

  const visible = showAll ? list : list.slice(0, showLimit);

  return (
    <div className="flex flex-col gap-6">
      <div className={`${listingStyle}`}>
        {visible.map(renderItem)}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="default"
            onClick={() => setShowAll((prev) => !prev)}
            className="gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Mostrar menos
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                {buttonText}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}