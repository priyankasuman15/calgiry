'use strict';


const sponsors =
  [
    {
      active: 'y',
      sponsor: 'Remax Mountain View Real Estate',
      tagline: '',
      address: '222 - 4625 Varsity Drive',
      name: 'Steve Sklenka',
      phone: '403.247.5171',
      href: 'http://remax-west-cochrane-ab.ca',
      img: 'remax.gif',
      alt: 'Remax Mountain View Real Estate'
    },
    {
      active: 'y',
      sponsor: 'Insight Image',
      tagline: 'Sign Making &amp; Print Services',
      address: '',
      name: 'Daran Fletcher',
      phone: '403.932.1421',
      href: '',
      img: 'insight.gif',
      alt: 'Insight Image'
    },
    {
      active: 'y',
      sponsor: 'Concord Mortgage Group',
      tagline: '',
      address: '107 - 1905 Centre Street',
      name: 'Trevor Hickey',
      phone: '403.290.1968',
      href: 'http://concordmortgage.ca',
      img: 'concord.gif',
      alt: 'Concord Mortgage Group Ltd'
    },
    {
      active: 'y',
      sponsor: 'Arthur Home Inspections Inc',
      tagline: 'Doing It Right<br>Just Like My Own Home',
      address: '',
      name: 'Arthur Odachowski',
      phone: '403.667.1872',
      href: 'http://inspectcalgaryhome',
      img: 'arthur.gif',
      alt: 'Arthur Home Inspections Inc'
    },
    {
      active: 'y',
      sponsor: 'Sickels Meat',
      tagline: '',
      address: '3121 - 34 Avenue SE',
      name: 'Gerald Sickel',
      phone: '403.305.0871',
      href: 'http://crossroadsmarket.ca',
      img: 'crossroads.gif',
      alt: 'Sickels Meat'
    },
    {
      active: 'y',
      sponsor: 'Chinook ChemDry',
      tagline: 'Your Healthy Home<br>Starts Here',
      address: '',
      name: 'Hugo Alfredo Perez',
      phone: '403.831.8452',
      href: 'http://carpetcleanercalgary.ca',
      img: 'chemdry.gif',
      alt: 'Chinook ChemDry'
    },
    {
      active: 'y',
      sponsor: 'Walsh Law LLP',
      tagline: 'Our People<br>Your Solutions',
      address: '2800, 801 6th Avenue SW',
      name: 'Lubos Pesta',
      phone: '403.267.8432',
      href: 'http://walshlaw.ca',
      img: 'walsh.gif',
      alt: 'Walsh Law LLP'
    },
    {
      active: 'n',
      sponsor: 'neven.ca',
      tagline: 'NodeJS Developer',
      address: 'Calgary, AB',
      name: 'Knut Neven',
      phone: '403.667.6960',
      href: 'https://neven.ca',
      img: 'neven.png',
      alt: 'neven.ca'
    },
    {
      active: 'y',
      sponsor: 'EnergyCostSaver',
      tagline: 'Invest In Renewables<br>Turn Taxes Into Profits',
      address: '',
      name: 'Josh Clark',
      phone: '403.305.9167',
      href: 'https://energycostsaver.com',
      img: 'energy.gif',
      alt: 'EnergyCostSaver'
    }
  ];




module.exports = sponsors;




/*

<div class="sponsor">
  <span>
    <h3>Ducks On The Roof</h3>
    <p>205 - 3rd Avenue West<br>403.932.5959</p>
  </span>
  <span>
    <a href="http://ducksontheroof.ca">
      <img src="img/content/sponsors/ducks.gif" height="60" width="60" alt="Ducks On The Roof - Sports Bar &amp; Grill"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>The Venue</h3>
    <p>79 Railway Avenue East<br>587.362.4283</p>
  </span>
  <span>
    <a href="http://thevenuecochrane.ca">
      <img src="img/content/sponsors/venue.gif" height="60" width="60" alt="The Venue - Bar &amp; Grill"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>MAGpro</h3>
    <p>Residential, Commercial &amp; Industrial Building Envelopes<br>403.966.1046</p>
  </span>
  <span>
    <a href="http://mag-pro.com">
      <img src="img/content/sponsors/magpro.gif" height="60" width="60" alt="MAGpro"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>Spray Lakes Sawmills</h3>
    <p>Top Spray Division<br>403.932.1464</p>
  </span>
  <span>
    <a href="http://topspray.com/LandscapingProductsServices/TopSprayOrganicMulchProducts.aspx">
      <img src="img/content/sponsors/sls.gif" height="60" width="60" alt="Spray Lakes Sawmills - Top Spray Division"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>TWO Pharmacy</h3>
    <p>Grand Professional Building<br>#105 - 100 Grand Boulevard</p>
  </span>
  <span>
    <a href="http://twopharmacy.ca">
      <img src="img/content/sponsors/two.gif" height="60" width="60" alt="TWO Pharmacy"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>OnGrowing Works</h3>
    <p>Innovate, Renovate, Educate<br>403.932.3766</p>
  </span>
  <span>
    <a href="http://ongrowing.com">
      <img src="img/content/sponsors/ongrowing.gif" height="60" width="60" alt="OnGrowing Works"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>Woolrich Group</h3>
    <p>Integrated Design &amp; Construction<br>403.851.0076</p>
  </span>
  <span>
    <a href="http://woolrichgroup.com">
      <img src="img/content/sponsors/woolrich.gif" height="60" width="60" alt="Woolrich Group"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>Fence &amp; Post</h3>
    <p>Casual Fine Dining<br>214 - 1st Street West<br>403.981.7678</p>
  </span>
  <span>
    <a href="http://fenceandpost.ca">
      <img src="img/content/sponsors/fence.gif" height="60" width="60" alt="Fence &amp; Post"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>Green Drop</h3>
    <p>Sustainable Landscapes<br>403.273.9000</p>
  </span>
  <span>
    <a href="http://greendrop.ca">
      <img src="img/content/sponsors/greendrop.gif" height="60" width="60" alt="Green Drop"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>Sunset Ridge Dental</h3>
    <p>9109 - 101 Sunset Drive<br>403.981.3685</p>
  </span>
  <span>
    <a href="http://">
      <img src="img/content/sponsors/dental.gif" height="60" width="60" alt="Sunset Ridge Dental"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>A-Z Pre-School</h3>
    <p>404 - 4th Avenue North<br>Rose McRae<br>403.803.7106</p>
  </span>
  <span>
    <a href="http://">
      <img src="img/content/sponsors/preschool.gif" height="60" width="60" alt="A-Z Pre-School"/>
    </a>
  </span>
</div>

<div class="sponsor">
  <span>
    <h3>Boys &amp; Girls Club</h3>
    <p>111 - 5th Avenue West<br>403.981.2020</p>
  </span>
  <span>
    <a href="http://bgccochrane.ca">
      <img src="img/content/sponsors/bgc.gif" height="60" width="60" alt="Boys &amp; Girls Club"/>
    </a>
  </span>
</div> -->




<div class="sponsor">
  <h3>Cochrane Minor Soccer<a href="http://932kick.com"><img src="img/content/sponsors/cms.gif" height="60" width="60" alt="Cochrane Minor Soccer"/></a></h3>
  <p>403.932.5425</p>
</div>

<div class="sponsor">
  <h3>Cochrane Toyota<a href="http://cochranetoyota.com"><img src="img/content/sponsors/toyota.gif" height="60" width="60" alt="Cochrane Toyota"/></a></h3>
  <p>8 River Heights Drive<br>888.675.6380</p>
</div>

<div class="sponsor">
  <h3>Ken Harrison<img src="img/clear.gif" height="60" width="60" alt="Ken Harrison"/></h3>
  <p>Ken Harrison</p>
</div>

<div class="sponsor">
  <h3>TriOil<a href="http://trioilresources.com"><img src="img/content/sponsors/trioil.gif" height="60" width="60" alt="TriOil"/></a></h3>
  <p>TriOil<br>Calgary, AB<br>403.265.4115</p>
</div>

<div class="sponsor">
  <h3>Soccer City<a href="http://mysoccercity.ca"><img src="img/content/sponsors/soccercity.gif" height="60" width="60" alt="SoccerCity - Joe Deacon"/></a></h3>
  <p>Joe Deacon<br>604.530.4240</p>
</div>

<div class="sponsor">
  <h3>Town of Cochrane<a href="http://cochrane.ca"><img src="img/clear.gif" height="60" width="60" alt="Town of Cochrane - Community Services"/></a></h3>
  <p>Community Services</p>
</div>

<div class="sponsor">
  <h3>Vinestone Wine Co<img src="img/content/sponsors/vinestone.gif" height="60" width="60" alt="Vinestone Wine Co"/></h3>
  <p>Vinestone Wine Co</p>
</div>

<div class="sponsor">
  <h3>PNR RailWorks<a href="http://pnrail.com"><img src="img/content/sponsors/pnr.gif" height="60" width="60" alt="PNR Railworks"/></a></h3>
  <p>Abbotsford, BC<br>604.850.9166</p>
</div>

<div class="sponsor">
  <h3>Tim Hortons<a href="http://timhortons.com"><img src="img/content/sponsors/timhortons.gif" height="60" width="60" alt="Tim Hortons"/></a></h3>
  <p>12 Westside Drive<br>403.851.1515</p>
</div>

<div class="sponsor">
  <p><strong>After Glow Hair Salon</strong></p>
  <p>Ziad Dagher<br>403.932.2273<br>508 - 1st Street West<br>Cochrane, AB</p>
</div>

<div class="sponsor">
  <p><strong>BMW Construction</strong><br>Renovations, General Contracting, Painting, Decks, Windows and Doors</p>
  <p>Bruce Woolrich<br>403.461.2691<br><a href="mailto:woolrich@pathcom.ca">woolrich@pathcom.ca</a></p>
</div>

<div class="sponsor">
  <p><strong>Great Things In Store</strong><br>New and Recycled Funky Fashions, Accessories and Cool Kid Gear</p>
  <p>Bonnie Bend<br>403.851.5211<br>5, 104 Railway Street West<br>Cochrane, AB<br>T4C 2B5<br><a href="mailto:bonnie@greatthingsinstore.com">bonnie@greatthingsinstore.com</a><br><a href="http://www.greatthingsinstore.com">www.greatthingsinstore.com</a></p>
</div>

<div class="sponsor">
  <p><strong>Head Rush Salon</strong><br>Designer Cuts and Colors, Redken Professional Hair Color and Products</p>
  <p>Sandra Rush<br>403.651.1150<br>Hidden Valley<br><a href="mailto:head.rush@live.com">head.rush@live.com</a></p>
</div>

<div class="sponsor">
<p><strong>Norwex Products</strong><br>Independent Consultant</p>
<p>Tara Barclay<br>403.200.4120<br>265 Sunset Heights<br>Cochrane, AB<br>T4C 0E1<br><a href="mailto:taragbarclay@gmail.com">taragbarclay@gmail.com</a><br><a href="http://tarabarclay.norwex.biz">www.tarabarclay.norwex.biz</a></p>
</div>

<div class="sponsor">
<p><strong>Riverside Insurance</strong></p>
<p>Carol Brammer<br><a href="http://riversideinsurance.com">www.riversideinsurance.com</a></p>
</div>

<div class="sponsor">
<p><strong>Thom Design</strong><br>Interior Design and Project Management Services for Residential and
Commercial Window Coverings, Custom Draperies and Blinds</p>
<p>Cecily Woolrich<br>403.616.3091<br><a href="mailto:cecilyw@thomdesign.ca">cecilyw@thomdesign.ca</a></p>
</div>

<div class="sponsor">
<p><strong>ZooZoo Auto Sales</strong></p>
<p>Ziad Dagher<br>403.819.4077<br>132 River Avenue<br>Cochrane, AB<br>T4C 2C2<br><a href="mailto:zoozooauto@hotmail.ca">zoozooauto@hotmail.ca</a><br><a href="http://bsvauto.com">www.bsvauto.com</a></p>
</div>

*/
