import { FilterButtonProps } from "interfaces";

export const FilterButton = ({
  title,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
      onClick={onClick}
      type="button"
    >
      {title}
    </button>
  );
};
