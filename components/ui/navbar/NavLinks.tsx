'use client';
import React, { useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

interface navItems {
  label: string;
  link?: string;
  download?: string;
}

const navlinks: navItems[] = [
  { label: 'Calendar', link: "#home" },
  { label: 'Blogs', link: "#home" },
  { label: 'Music', link: "#home" },
];

export default function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{ fontFamily: "monospace" }}
      className="font-mono flex items-center justify-center mx-auto dark:text-white"
    >
      <List
        className="font-mono flex flex-row items-center justify-center space-x-6"
        style={{ maxWidth: 700 }}
      >
        {navlinks.map((item, index) => (
          <div
            key={item.label}
            className="relative flex-shrink-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ListItemButton
              disableRipple
              disableTouchRipple
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                padding: '10px 20px', // Consistent padding for alignment
                textAlign: 'center',
              }}
              component="a"
              href={item.link || item.download || "#"}
              download={!!item.download}
            >
              <ListItemText
                primary={item.label}
                className="font-mono text-sm md:text-base lg:text-lg"
              />
            </ListItemButton>
            <div
              className={`font-mono absolute bottom-0 left-0 h-[3px] bg-blue-500 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 w-full' : 'opacity-0 w-0'
                }`}
            ></div>
          </div>
        ))}
      </List>
    </div>
  );
}
