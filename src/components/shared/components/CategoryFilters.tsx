/**
 * COMPONENTE REUTILIZABLE - CategoryFilters
 * Filtros de categorías usando styled components
 */

import React from 'react';
import { CategoryFiltersProps } from '../types';
import {
  FiltersContainer,
  FiltersButtonGroup,
  FilterButton
} from '../styled';

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  filters,
  onFilterClick
}) => {
  return (
    <FiltersContainer>
      <FiltersButtonGroup>
        {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            color={filter.color}
            isActive={filter.isActive}
            onClick={() => onFilterClick(filter.id)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FiltersButtonGroup>
    </FiltersContainer>
  );
};

export default CategoryFilters;
