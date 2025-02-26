import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiFlutter, SiRust } from "react-icons/si";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "Backend" ? "active" : null}
        aria-label="Filter by Backend"
        onClick={() => filter("Backend")}
      >
        <SiRust />
      </Button>
      <Button
        type="button"
        className={filterBy === "Flutter" ? "active" : null}
        aria-label="Filter by Flutter"
        onClick={() => filter("Flutter")}
      >
        <SiFlutter />
      </Button>
      <Button
        type="button"
        className={filterBy === "React" ? "active" : null}
        aria-label="Filter by ReactJS"
        onClick={() => filter("react")}
      >
        <SiReact />
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
