import { BsFillHouseDoorFill, BsPeopleFill, BsPatchCheckFill, BsJournalBookmarkFill, BsFilterSquareFill, BsKanban } from "react-icons/bs";

export const Menu = {
  menu: [
    {
      label: "Home",
      section: "#home",
      icon: <BsFillHouseDoorFill
        style={{
          fontSize: "1.5em"
        }}
      />
    },
    {
      label: "About",
      section: "#about",
      className: "bx-user",
      icon: <BsPeopleFill
        style={{
          fontSize: "1.5em"
        }}
      />
    },
    {
      label: "Technical Skills",
      section: "#skills",
      className: "bx-receipt",
      icon: <BsPatchCheckFill
        style={{
          fontSize: "1.5em"
        }}
      />
    },
    {
      label: "Work Experience",
      section: "#experience",
      className: "bx-award",
      icon: <BsKanban
        style={{
          fontSize: "1.5em"
        }}
      />
    },
    {
      label: "Summary",
      section: "#summary",
      className: "bx-briefcase-alt",
      icon: <BsFilterSquareFill
        style={{
          fontSize: "1.5em"
        }}
      />
    },
    {
      label: "Education",
      section: "#education",
      className: "bx-book",
      icon: <BsJournalBookmarkFill
        style={{
          fontSize: "1.5em"
        }}
      />
    },
  ],
};
