import { BsFillHouseDoorFill, BsPeopleFill, BsPatchCheckFill, BsJournalBookmarkFill, BsUiRadios, BsKanban } from "react-icons/bs";

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
      label: "Activities",
      section: "#activities",
      className: "bx-briefcase-alt",
      icon: <BsUiRadios
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
