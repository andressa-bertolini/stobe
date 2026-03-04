import { Popper, Fade } from '@mui/material';
import { useState } from 'react';
import type { MouseEvent } from 'react';

interface Props {
  src: string;
  alt?: string;
  thumbWidth?: string | number;
  thumbHeight?: string | number;
  zoomWidth?: string | number;
  zoomHeight?: string | number;
  placement?: 'right' | 'left' | 'top' | 'bottom';
}

const ZoomImage = ({
  src,
  alt = '',
  thumbWidth = 30,
  thumbHeight = 30,
  zoomWidth = 200,
  zoomHeight = 200,
  placement = 'right',
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={thumbWidth}
        height={thumbHeight}
        style={{ cursor: 'pointer', objectFit: 'cover' }}
        onMouseEnter={(e: MouseEvent<HTMLImageElement>) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      />
      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} transition placement={placement} style={{ zIndex: 9999 }}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <img
              src={src}
              alt={alt}
              width={zoomWidth}
              height={zoomHeight}
              style={{ objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
            />
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ZoomImage;