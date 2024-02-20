import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Rating" },
    ];

    const current_sort_order = sortOrders.find(order_item => order_item.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={ Button } rightIcon={<BsChevronDown/>}>Order by: { current_sort_order?.label || "Relevance" }</MenuButton>

            <MenuList>
                { sortOrders.map((order_item, order_index) => 
                    <MenuItem onClick={ () => onSelectSortOrder(order_item.value) } key={ order_index + 1 } value={ order_item.value }>{ order_item.label }</MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default SortSelector;