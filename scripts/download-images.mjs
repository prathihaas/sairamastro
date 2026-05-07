/**
 * Self-host all external product, hero, and service images for sairamhonda.com
 * Run: node scripts/download-images.mjs
 */

import https from 'node:https';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'public', 'images', 'products');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');

fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
fs.mkdirSync(IMAGES_DIR, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;

    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/webp,image/avif,image/*,*/*',
        'Referer': 'https://www.honda2wheelersindia.com/',
      },
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    });
    req.on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
    file.on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

// Product images: slug → Honda CDN URL
const PRODUCTS = [
  {
    slug: 'activa-110',
    file: 'activa-110.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fscooter%2FActiva-110%2FGet-to-know-your-ride%2FGet-to-know-your-ride-584x450.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'activa-125',
    file: 'activa-125.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fscooter%2Factiva-125%2Fget-to-know-your-ride-584x450-3.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'cb200x',
    file: 'cb200x.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Fnx200%2Fget-to-know-your-ride.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'cbhornet125',
    file: 'cb-hornet-125.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FCB-125%2FGet-to-know%2F1038x638_Pxl-copy.jpg%3Fh%3D638%26iar%3D0%26w%3D1038&w=2580&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'dio-110',
    file: 'dio-110.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fscooter%2Fdio-110%2Fdio-110-get-to-know-your-ride.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'dio-125',
    file: 'dio-125.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Fdio-125%2FDesktop%2FGet-to-know-your-ride%2FGet-to-know-your-ride-584x450.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'hornet-2-0',
    file: 'hornet-2-0.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FHornet-2%2Fimage.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'livo',
    file: 'livo.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Flivo%2Fget-to-know-your-ride.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'shine-100-dx',
    file: 'shine-100-dx.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Fshine-100-dx%2FGet-to-know-your-ride%2FShine-100-DX-end-pages_584_450-know-your-ride.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'shine-100',
    file: 'shine-100.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FShine-100%2Fshine100-get-to-know-your-ride.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'shine-125',
    file: 'shine-125.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Fshine-125%2FSpecification%2FGet-to-know-your-ride-584x450.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'sp-125',
    file: 'sp-125.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Fsp-125%2Fget-to-know-your-ride%2FGet-to-know-your-ride-584x450.png%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'sp-160',
    file: 'sp-160.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2Fsp-160%2FGet-to-know-your-ride%2Fget-to-know-your-ride.jpg%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
  {
    slug: 'unicorn',
    file: 'unicorn.jpg',
    url: 'https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FUnicorn%2FGet-to-know-your-ride%2Fget-to-know-your-ride.jpg%3Fh%3D450%26iar%3D0%26w%3D584&w=1200&q=75&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq',
  },
];

// Hero and service replacement images (Unsplash/Pexels — free for commercial use)
const SITE_IMAGES = [
  {
    file: 'hero.jpg',
    url: 'https://images.unsplash.com/photo-1709261195883-98440da30547?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    dest: IMAGES_DIR,
  },
  {
    file: 'service-workshop.jpg',
    url: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    dest: IMAGES_DIR,
  },
];

async function run() {
  console.log('=== Downloading product images ===');
  for (const p of PRODUCTS) {
    const dest = path.join(PRODUCTS_DIR, p.file);
    process.stdout.write(`  ${p.slug}... `);
    try {
      await download(p.url, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`✓ ${size} KB → /images/products/${p.file}`);
    } catch (err) {
      console.log(`✗ FAILED: ${err.message}`);
    }
  }

  console.log('\n=== Downloading site images ===');
  for (const img of SITE_IMAGES) {
    const dest = path.join(img.dest, img.file);
    process.stdout.write(`  ${img.file}... `);
    try {
      await download(img.url, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`✓ ${size} KB → /images/${img.file}`);
    } catch (err) {
      console.log(`✗ FAILED: ${err.message}`);
    }
  }

  console.log('\n=== Updating product .md frontmatter ===');
  const contentDir = path.join(ROOT, 'src', 'content', 'products');
  for (const p of PRODUCTS) {
    const mdPath = path.join(contentDir, `${p.slug}.md`);
    if (!fs.existsSync(mdPath)) {
      console.log(`  ${p.slug}.md not found, skipping`);
      continue;
    }
    let content = fs.readFileSync(mdPath, 'utf8');
    const newImageValue = `/images/products/${p.file}`;
    // Replace featured_image line
    const updated = content.replace(
      /featured_image:\s*"[^"]*"/,
      `featured_image: "${newImageValue}"`
    );
    if (updated !== content) {
      fs.writeFileSync(mdPath, updated, 'utf8');
      console.log(`  ✓ ${p.slug}.md → ${newImageValue}`);
    } else {
      console.log(`  ~ ${p.slug}.md (no change needed)`);
    }
  }

  console.log('\n=== Updating index.astro hero image ===');
  const indexPath = path.join(ROOT, 'src', 'pages', 'index.astro');
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    const updated = content.replace(
      /https:\/\/images\.financialexpressdigital\.com\/[^"']*/g,
      '/images/hero.jpg'
    );
    if (updated !== content) {
      fs.writeFileSync(indexPath, updated, 'utf8');
      console.log('  ✓ index.astro hero image updated');
    } else {
      // Try broader match for any external hero image reference
      const updated2 = content.replace(
        /(preloadImage|hero)[^"']*https:\/\/[^"']*(activa|honda)[^"']*/gi,
        (m) => m.replace(/https:\/\/[^\s"']+/gi, '/images/hero.jpg')
      );
      if (updated2 !== content) {
        fs.writeFileSync(indexPath, updated2, 'utf8');
        console.log('  ✓ index.astro hero image updated (broad match)');
      } else {
        console.log('  ~ index.astro: hero image reference not found with known URL pattern');
      }
    }
  }

  console.log('\n=== Updating service.astro workshop image ===');
  const servicePath = path.join(ROOT, 'src', 'pages', 'service.astro');
  if (fs.existsSync(servicePath)) {
    let content = fs.readFileSync(servicePath, 'utf8');
    const updated = content.replace(
      /https:\/\/yashhonda\.com\/[^"']*/g,
      '/images/service-workshop.jpg'
    );
    if (updated !== content) {
      fs.writeFileSync(servicePath, updated, 'utf8');
      console.log('  ✓ service.astro workshop image updated');
    } else {
      console.log('  ~ service.astro: Yash Honda URL not found');
    }
  }

  console.log('\nDone.');
}

run().catch(console.error);
