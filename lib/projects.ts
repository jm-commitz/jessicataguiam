export type RenderMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  floorplan?: string;
  render: RenderMedia;
  renderLabel?: string;
  tags: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "tcpgh",
    title: "Tuguegarao City People's General Hospital",
    subtitle: "TCPGH",
    year: "2025",
    floorplan: "/images/projects/floorplan-tcpgh.png",
    render: { type: "image", src: "/images/projects/3d-tcpgh.jpg" },
    tags: ["As-Built", "Healthcare"],
    description:
      "As-Built Plan for the construction of an elevator within the existing hospital building. The plan was prepared to identify and determine the most suitable area within the building where the elevator can be installed.",
  },
  {
    id: "tug-sci",
    title: "Tuguegarao City Science High School",
    subtitle: "TUG — SCI",
    year: "2025",
    floorplan: "/images/projects/floorplan-tug-sci.png",
    render: { type: "video", src: "/images/projects/3d-tug-sci.mp4" },
    tags: ["As-Built", "Education"],
    description:
      "As-Built Plan and 3D Perspective of the Tuguegarao City Science High School prepared to document the finalized layout of the school facility. The 3D perspective provides a visual representation of the completed structure, showcasing the overall form and design of the building.",
  },
  {
    id: "cho",
    title: "Tuguegarao City Health Office",
    subtitle: "CHO",
    year: "2025",
    floorplan: "/images/projects/floorplan-cho.png",
    render: { type: "image", src: "/images/projects/elevation-cho.png" },
    renderLabel: "Elevation",
    tags: ["As-Built", "Government"],
    description:
      "As-Built Plan of the new building extension annexed to the existing old structure of the City Health Office. The image presents the floor plan and elevations of the completed extension as the primary reference for the as-built documentation.",
  },
  {
    id: "srl",
    title: "Santa Rosa Plant",
    subtitle: "SRL",
    year: "2025",
    floorplan: "/images/projects/flooorplan-srl.png",
    render: { type: "video", src: "/images/projects/final3-srl.mp4" },
    tags: ["Industrial", "As-Built"],
    description:
      "Installation of Platform SR2 on Line 4 of the Santa Rosa Plant facility to support operational and production requirements. The floor plan depicts the overall layout of the Santa Rosa Plant and indicates the specific locations of the platforms within the facility.",
  },
  {
    id: "dfa",
    title: "Department of Foreign Affairs – Tuguegarao City",
    subtitle: "DFA — Tug. City",
    year: "2024",
    render: { type: "video", src: "/images/projects/3d.mp4" },
    tags: ["Refurbishment", "Government"],
    description:
      "Refurbishment of designated areas inside the DFA Tuguegarao City office to improve functionality and client-facing spaces. The scope includes interior renovation works such as partitioning, finishing, and upgrading of existing facilities.",
  },
];
