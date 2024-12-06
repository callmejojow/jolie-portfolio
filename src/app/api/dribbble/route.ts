import { NextRequest, NextResponse } from 'next/server';

interface DribbbleShot {
  id: number;
  title: string;
  images: {
    [key: string]: string;
  };
  html_url: string;
}

export async function GET() {
  try {
    const perPage = 100; 
    let page = 1;
    let allShots: DribbbleShot[] = [];
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.dribbble.com/v2/user/shots?page=${page}&per_page=${perPage}`, 
        {
          headers: {
            'Authorization': `Bearer ${process.env.DRIBBBLE_ACCESS_TOKEN}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch from Dribbble API');
      }

      const shots = await response.json();
      
      if (shots.length === 0) {
        hasMore = false;
      } else {
        allShots = [...allShots, ...shots];
        page++;
      }
    }

    return NextResponse.json(allShots);
    
  } catch (error) {
    console.error('Dribbble API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch illustrations' },
      { status: 500 }
    );
  }
}
