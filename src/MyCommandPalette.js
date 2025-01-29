// file: MyCommandPalette.js

import React, { useState } from 'react';
import { Command } from 'cmdk';

const MyCommandPalette = () => {
  const [open, setOpen] = useState(false);

  const commands = [
    { id: 1, name: 'Open Settings' },
    { id: 2, name: 'New File' },
    { id: 3, name: 'Find' },
    { id: 4, name: 'Replace' }
  ];

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        Toggle Command Palette
      </button>
      {open && (
        <Command>
          <Command.Input placeholder="Type a command..." />
          <Command.List>
            {commands.map((command) => (
              <Command.Item key={command.id}>
                {command.name}
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      )}
    </div>
  );
};

export default MyCommandPalette;