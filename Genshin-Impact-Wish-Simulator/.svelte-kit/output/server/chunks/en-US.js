const title = "Genshin Impact Wish Simulator";
const character = "Character";
const weapon = "Weapon";
const vision = "Vision";
const anemo = "Anemo";
const cryo = "Cryo";
const dendro = "Dendro";
const electro = "Electro";
const hydro = "Hydro";
const geo = "Geo";
const pyro = "Pyro";
const bow = "Bow";
const catalyst = "Catalyst";
const claymore = "Claymore";
const sword = "Sword";
const polearm = "Polearm";
const extra = "Extra";
const obtained = "Obtained";
const waiting = "Waiting";
const connectionFailed = "Connection Failed!";
const confirmButton = "Confirm";
const cancelButton = "Cancel";
const disclaimer = "All assets used in this site are owned by miHoYo.";
const fanmade = "This is purely a fan made Application, enjoy it !";
const pressToContinue = "Press anywhere in the blank area to continue";
const installInstruction = "Instructions to Install to Home Screen/Desktop";
const share = "Share";
const screenshot = "Take Picture";
const capturing = "Capturing";
const rewardFirstShare = "Reward for first share : {qty}";
const version = "Version";
const donate = "Donate";
const banner = {
  beginner: "Beginners' Wish",
  wanderlust: "Wanderlust Invocation",
  "epitome-invocation": "Epitome Invocation",
  "adrift-in-the-harbor": "Adrift in The Harbor",
  "auric-blaze": "Auric Blaze",
  "azure-excursion": "Azure Excursion",
  "ballad-in-goblets": "Ballad in Goblets",
  "born-of-ocean-swell": "Born of Ocean Swell",
  "caution-in-confidence": "Caution in Confidence",
  "chanson-of-many-waters": "Chanson of Many Waters",
  "conjuring-chiaroscuro": "Conjuring Chiaroscuro",
  "dance-of-lantern": "Dance of Lantern",
  "decree-of-the-deeps": "Decree of the Deeps",
  "discerner-of-enigmas": "Discerner of Enigmas",
  "drifting-luminescence": "Drifting Luminescence",
  "everbloom-violet": "Everbloom Violet",
  "farewell-of-snezhnaya": "Farewell of Snezhnaya",
  "from-ashes-reborn": "From Ashes Reborn",
  "gentry-of-hermitage": "Gentry of Hermitage",
  "immaculate-pulse": "Immaculate Pulse",
  "in-the-name-of-the-rosula": "In the Name of the Rosula",
  "invitation-to-mundane-life": "Invitation to Mundane Life",
  "leaves-in-the-wind": "Leaves in The Wind",
  "moment-of-bloom": "Moment of Bloom",
  "oni_s-royale": "Oni's Royale",
  "reign-of-serenity": "Reign of Serenity",
  "secretum-secretorum": "Secretum Secretorum",
  "sparkling-steps": "Sparkling Steps",
  "tapestry-of-golden-flames": "Tapestry of Golden Flames",
  "tempestuous-destiny": "Tempestuous Destiny",
  "the-heron_s-court": "The Heron's Court",
  "the-moongrass-enlightenment": "The Moongrass' Enlightenment",
  "the-transcendent-one-returns": "The Transcendent One Returns",
  "twilight-arbiter": "Twilight Arbiter",
  "twirling-lotus": "Twirling Lotus",
  "viridescent-vigil": "Viridescent Vigil"
};
const editor = {
  bannerConfig: "{banner} Configuration",
  baseRate: "{rarity}-Star Base Rate:",
  maxPity: "{rarity}-Star Max Pity:",
  hardPity: "Boost {rarity}-Star rate starts from pity:",
  currentPity: "{rarity}-Star Current Pity",
  winRate: "Chance to get Featured Item:",
  charRate: "Chance to get Character instead of Weapon",
  nonRateup: "(When losing 4-Star Item)",
  selectedRate: "Selected Weapon Rate:",
  guaranteedSystem: "Guaranteed System",
  backToDefault: "Back to Default",
  resetPrompt: 'Are you sure to Reset <b>"{banner}"</b> probabilities back to default?',
  "default": "Default",
  never: "Never",
  always: "Always"
};
const customBanner = {
  title: "Customize Banner",
  deletePrompt: "Are You Sure to delete this banner ?",
  ownerDeleteNote: "If you've shared this banner publicly, The Travelers who have made wishes on your banner will no longer be able to access it.",
  userDeleteNote: "The Wishing History on this banner will not be deleted, but you will not be able to pull on this banner again.",
  retry: "Retry",
  findBanner: "Looking for a Banner..",
  networkError: "Network Error, Please check your Connection!",
  bannerNotFound: "Banner not found, wrong <u>Banner ID</u> or maybe the author has removed it.",
  invalidBanner: "Invalid Banner ID",
  identifying: "Identifying Banner",
  loadOwnedBanner: `You're the owner of "{ownedBanner}" banner, your local data will be used instead of the data you've shared online.`,
  loadReady: '"{banner}" is ready to Wish',
  uploading: "Uploading {item}",
  uploadFailed: "Image Upload Failed, please try again later!",
  close: "Close",
  almostDone: "Almost Done",
  shareText: "Come and Try Your Luck on my {character} Banner Simulator",
  setPosition: "Set Position",
  next: "Next",
  move: "Move",
  changeSplashArt: "Change Splash Art",
  adjustSplashArt: "Adjust Splash Art",
  dropHere: "Drop Here!",
  preview: "Banner Preview",
  generateImage: "Generate Image",
  notAnImage: "Not an Image",
  imageTooLarge: "Image is too Large, max size: {maxSize}",
  faceIcon: "Face Icon",
  addBanner: "Add Banner",
  "delete": "Delete",
  deleteFailed: "Failed to Remove",
  bannerRemoved: "Banner Removed",
  edit: "Edit",
  editInfo: "Edit Info",
  editBanner: "Edit Banner Information",
  bannerName: "Banner Name",
  charName: "Character Name",
  charTitle: "Character Title",
  watermark: "Watermark",
  completeAllField: "Please Complete All Required Field!",
  finishAndWish: "Finish and Wish",
  publish: "Publish Banner",
  updateAndShare: "Update & Share",
  rateupChar: "Rate Up Characters",
  yourBanners: "Your Banners",
  createBanner: "Create a Custom Banner",
  limitation: "You are not a member, please delete some banners to activate the editor",
  memberToUnlock: "Become a Member to Add More Banner",
  incomplete: "Incomplete",
  inappropriate: "Inappropriate Content!"
};
const backupRestore = {
  cloudSync: "Cloud Sync",
  localSync: "Local Backup/Restore",
  "import": "Import Data",
  "export": "Export Data",
  importAction: "{fileInfo} will be added to the App, please choose what action you want to perform!",
  mergeAction: "Merge Data <small>Automatically remove duplicate item(s) and insert new item(s)</small>",
  replaceAction: "Replace Data <small> Erase the current App Data and replace it with the imported one. </small>",
  dropFiles: "Drop Your File Here",
  autoExport: "Auto Export",
  destination: "Destination",
  lastExport: "Last Export",
  desNotFound: "Cannot find backup file location, please try to Export again"
};
const wish = {
  wishTitle: "Wish",
  rollButton: "Wish {count}",
  stellaFortuna: "Stella Fortuna",
  loadFailed: "Failed to load Banner! <br /> Please switch to other banner or reconnect to the internet to avoid errors!",
  loadMeteor: "Load Animation",
  skipMeteor: "Skip Animation",
  loadMeteorMsg: "Loading <span>{star} Star Meteor Animation </span>",
  meteorNotLoaded: "Cannot find Meteor Animation in your storage, please <span> Load the Meteor Animation</span> first before pulling, or <span> Turn ON </span> the option to skip Animation!",
  preloadFilesMsg: "* The loaded files will be stored in the Browser Storage, so you don't need to load them again until the site is updated.",
  banner: {
    text: "Banner",
    allBanner: "All Banners",
    previous: "Previous Banner",
    findBanner: "Find a Banner",
    group: "Group",
    beginner: "Beginners' Wish",
    "character-event": "Character Event Wish",
    "weapon-event": "Weapons Wish",
    standard: "Standard Wish",
    wishDescription: "Every 10 wishes is guaranteed to include at least one 4-star or higher item",
    novice: "Novice Wishes",
    up: "UP!",
    beginnerSet: "10-set 20% off. First 10-set will receive {character}.",
    beginnerNote: '"As a dutiful maid would."',
    beginnerChance: "Chances Remaining: {chances}",
    standardNote: "Standard wishes have no time limit.",
    allWeaponTypes: "All Weapon Types",
    etc: "etc.",
    probIncreased: "Probability increased !",
    eventNote: "5-Star event-exclusive characters can only be obtained in the specified wish during the specified time period(s).",
    viewDetails: "View Details for more."
  },
  epitomizedPath: {
    text: "Epitomized Path",
    fatePoint: "Fate Points",
    cancelPrompt: "Do you wish to cancel your curent Course ?",
    cancelDesc: "Cancelation will reset your accumulated Fate Points",
    selectWeapon: "Select Weapon",
    chartCourseOf: "Chart Course of {target}",
    cancelCourse: "Cancel Course",
    chartCourse: "Chart Course",
    courseSetFor: "Course Set For: {selectedCourse}",
    description: [
      '"Epitomized Path" is a wish mechanic in "Epitome Invocation". Travelers can chart a course towards a specific 5-Star promotional weapon they hope to obtain.',
      "Once you have charted a course towards your chosen weapon, you will obtain 1 Fate Point upon <span> receiving a 5-Star weapon that is not the one that you chose</span>. You can obtain a maximum of 2 Fate Points.",
      `Once you've reached the maximum amount of Fate Points, the next 5-Star weapon you choose will be the one you have chosen through "Epitomized Path".`,
      "When you obtain the chosen weapon in Epitome Invocation through Epitomized Path, <span> the accumulated Fate Points will be cleared </span>.",
      "If you do not use Epitomized Path to obtain a weapon, you will not accumulate Fate Points.",
      "The charted course towards a certain weapon can be changed or cancelled. However, after doing so, any current Fate Points will be cleared.",
      "At the end of the current period of Epitome Invocation, any current Fate Points will be cleared."
    ]
  },
  result: {
    skip: "Skip",
    meteorFailed: "Meteor Animation Failed to Load",
    "new": "New",
    convertion: "Convert",
    title: "Wish Result for {item} et al"
  }
};
const outfit = {
  heading: "Character Outfits",
  "default": "Default",
  setOutfit: "Set Outfit",
  owned: "Already Owned",
  purchasePrompt: "You don't have a character for this costume yet, are you sure to purchase this costume?",
  promptInfo: "You still can use this costume after getting the right character",
  obtained: "New Outfit Obtained",
  unlocked: "{character}: Outfit Unlocked",
  item: {
    "5-star-outrider": {
      name: "5-Star Outrider"
    },
    "favonian-fevotion": {
      name: "Favonian Devotion"
    },
    "flowing-fate": {
      name: "Flowing Fate"
    },
    "executor_s-thorns": {
      name: "Executor's Thorns"
    },
    "sea-breeze-dandelion": {
      name: "Sea Breeze Dandelion",
      description: "Jean's summer wear. Light and cool, but no less elegant for it. The perfect choice for a trip to the seaside."
    },
    "summertime-sparkle": {
      name: "Summertime Sparkle",
      description: "Barbara's beach attire. This pretty skirt brims with summer vitality and carries with it a cool ocean breeze."
    },
    "opulent-splendor": {
      name: "Opulent Splendor",
      description: "Keqing's formal wear. Amidst the beautiful dawn of the Lantern Rite, the threads weaved by days of hard work intertwine into a light yet magnificent appearance."
    },
    "orchid_s-evening-gown": {
      name: "Orchid's Evening Gown",
      description: "Ningguang's formal wear. The long cyan skirt traces her elegant curves, and the butterfly wings at her ankles lend the outfit a touch of light grace."
    },
    "ein-immernachtstraum": {
      name: "Ein Immernachtstraum",
      description: "A ceremonial outfit for the Prinzessin. May she who is noble retain her courage, sincerity, and kindness forever, such that no evil shall ever overcome her."
    },
    "red-dead-of-night": {
      name: "Red Dead of Night",
      description: "One of the outfits Diluc wears during covert actions, it resembles a flame dancing in the shadows. The crimson red traces it leaves behind at the edges of the enemy's vision will scar their nightmares forever."
    },
    "a-sobriquet-under-shade": {
      name: "A Sobriquet Under Shade",
      description: "An outfit Lisa had someone commission for her when she revisited Sumeru. A perfect balance between practicality and elegance, the dress bears a resemblance to Lisa\u2019s old uniform from the Akademiya days."
    },
    "springbloom-missive": {
      name: "Springbloom Missive",
      description: "Ayaka\u2019s travel outfit. Its design is based on the Fontaine dresses depicted in light novel illustrations and seems to reflect the lifestyle of proper ladies who live in that nation."
    },
    "blossoming-starlight": {
      name: "Blossoming Starlight",
      description: "An exquisite outfit Klee wears only for the most important performances. The colors are brilliant, like a cake adorned with cream flowers and crowned with scarlet candles. With it comes happiness and smiles that will fill your adventures."
    },
    "sailwind-shadow": {
      name: "Sailwind Shadow",
      description: `Kaeya's outfit from his role as the "Dagger Bandit" in the play. Though flamboyant and designed to be as eye-catching as possible, it isn't difficult to put on, though it does take some time to get all the accessories and daggers sorted.`
    }
  }
};
const details = {
  text: "Details",
  promotional: "Promotional Items",
  itemlist: "List of Items",
  increasedRate: "Increased Drop Rates",
  percentageDrop: "Percentage of {rarity}-Star Item Drops: {percentage}",
  wishDetails: "Wish Details",
  probInfo: "Base Probability for {rarity}-Star Item Drops: {singlePercentage} (Incl. guarantee: {avgPercentage})",
  itemWishFor: "Item to wish for :",
  itemType: "Item Type",
  itemName: "Item Name",
  beginnerInfo: "No time limit (Closes after 20 wishes)",
  limited: "Limited Time Event",
  permanent: "Permanent",
  alert: "\u203B This is a {wishName}. The wish guarantee count is accumulated within this event only and is independent of the guarantee counts of other wishes.",
  beginner: [
    "Beginners' <span> Wish </span> has no time limit and is aimed at Travelers who have recently landed in Teyvat. Non-promotional characters and weapons are available. <br /> In Beginners' Wish, 10-wish sets cost <span> 20%</span> less Acquaint Fate, and your first 10-wish set is guaranteed to include {character} , and your second 10-wish set is guaranteed to include one <span> other </span> min. 4-Star character! <br/> Beginners' Wish expires after <span> 20 </span> attempts. After the wish expires, the page will disappear.",
    "\u203BIn most cases, the base probability of all characters and weapons is evenly distributed. If there is a boost or guarantee in effect, please refer to the corresponding rules.",
    "\u3013Rules\u3013",
    "Base probability of winning 5-Star character = <span> 0.600%</span> <br /> Base probability of winning 4-Star character = <span> 5.100%</span>; consolidated probability (incl. guarantee) = <span> 13.000%</span>;"
  ],
  standard: [
    '"{bannerName}" is a standard wish with no time limit. Non-event-exclusive characters and weapons are available.<br/> In this wish, <span>guaranteed</span> to win 4-star or above item at least once per 10 attempts.',
    "\u203BIn most cases, the base probability of all characters and weapons is evenly distributed. If there is a boost or guarantee in effect, please refer to the corresponding rules.",
    "\u3013Rules\u3013",
    "Base probability of winning 5-star item = <span>0.600%</span>; base probability of winning 5-star character = <span>0.300%</span>, and base probability of winning 5-star weapon = <span>0.300%</span>; consolidated probability (incl. guarantee) of winning 5-star item = <span>1.600%</span>; guaranteed to win 5-star item at least once per <span>90</span> attempts. <br> Base probability of winning 4-star item = <span>5.100%</span>; base probability of winning 4-star character = <span>2.550%</span>, and base probability of winning 4-star weapon = <span>2.550%</span>; consolidated probability (incl. guarantee) of winning 4-star item = <span>13.000%</span>; guaranteed to win 4-star or above item at least once per <span>10</span> attempts; probability of winning 4-star item through the guarantee = <span>99.400%</span>, and probability of winning 5-star item through the guarantee = <span>0.600%</span>. "
  ],
  events: [
    'Event Wish "{bannerName}" is now available. During this event wish, the  <span>event-exclusive</span> 5-star character {featuredCharacter} as well as 4-star characters {rateupCharacters} will get a <span> huge drop-rate boost</span>! <br/> <span> \u203B Of the above characters, the event-exclusive character will not be available in the standard wish "Wanderlust Invocation."</span>',
    "\u203B In most cases, drifting base probability of all characters and weapons is evenly distributed. If driftingre is a boost or guarantee in effect, please refer to drifting corresponding rules.",
    "\u3013Rules\u3013",
    "5-Star Items",
    'For Event Wish "{bannerName}": Base probability of winning 5-star character = <span> 0.600% </span>; consolidated probability (incl. guarantee) = <span>1.600%</span>; guaranteed to win 5-star character at least once per <span> 90</span> attempts.<br/> The first time you win a 5-star item in this event wish, there is a <span> 50.000%</span> chance it will be the promotional character {featuredCharacter}. If the first 5-star character you win in this event wish is not the promotional character, then the next 5-star character you win is <span> guaranteed</span> to be the promotional character.',
    "4-Star Items",
    'For Event Wish  "{bannerName}": Base probability of winning 4-star item = <span> 5.100%</span>; base probability of winning 4-star character = <span>2.550%</span>, and base probability of winning 4-star weapon = <span>2.550%</span>; consolidated probability (incl. guarantee) of winning 4-star item = <span> 13.000%</span>; guaranteed to win 4-star or above item at least once per 10 attempts; probability of winning 4-star item through the guarantee = <span>99.400%</span>, and probability of winning 5-star item through the guarantee = <span>0.600%</span>. <br/> The first time you win a 4-star item in this event wish, there is a <span>50.000%</span> chance it will be one of the featured characters {rateupCharacters}. If the first 4-star item you win in this event wish is not one of the featured characters, then the next 4-star item you win is <span>guaranteed</span> to be a featured character. When you win a featured 4-star item, the probability of obtaining each featured 4-star character is equal between all of them.'
  ],
  weapons: [
    'Event Wish "{bannerName}" is now available. During this event wish, the <span>event-exclusive</span> 5-star weapon {featuredWeapon1} and the 5-star weapon {featuredWeapon2} as well as the <span>event-exclusive</span> 4-star weapon {rateupWeapons}  will get a <span>huge drop-rate boost!</span> <br/> <span> \u203B Of the above weapons, the event-exclusive weapons will not be available in the standard wish "Wanderlust Invocation."</span>',
    "\u203B In most cases, the base probability of all characters and weapons is evenly distributed. If there is a boost or guarantee in effect, please refer to the corresponding rules.",
    "\u3013Rules\u3013",
    "5-Star Items",
    'For Event Wish "{bannerName}": Base probability of winning 5-star weapon = <span>0.700%</span>; consolidated probability (incl. guarantee) = <span>1.850%</span>; guaranteed to win 5-star weapon at least once per <span>80</span> attempts.<br/> The first time you win a 5-star weapon in this event wish, there is a <span>75.000%</span> chance it will be one of the promotional weapons {featuredWeapon1} and {featuredWeapon2}. If the first 5-star weapon you win in this event wish is not one of the promotional weapons, then the next 5-star weapon you win is <span>guaranteed</span> to be a promotional weapon. In the event that you obtain a promotional 5-star item through a wish without having maximum Fate Points, the probability of obtaining each promotional 5-star weapon is equal between all of them. <br/> For Event Wish "{bannerName}", you can chart a course towards your chosen promotional 5-star weapon with "Epitomized Path." The choice of weapon will only be valid for this period of Event Wish "{bannerName}". <br/> For Event Wish "{bannerName}", after charting a course towards a chosen weapon with "Epitomized Path," if you obtain a 5-star weapon that was not your chosen weapon, you will receive 1 Fate Point. Once you have reached the <span>maximum amount</span> of Fate Points, the next 5-star weapon will be <span>guaranteed</span> to be your chosen weapon. Once you have obtained the chosen weapon, the number of Fate Points will reset to <span>0</span> whether or not you have reached maximum points, and you will have to accumulate them again. If you do not use the "Epitomized Path" to chart a course towards a chosen weapon, you will <span>not</span> receive Fate Points. <br/> After charting a course towards a chosen weapon, you can change your choice or cancel it altogether, but doing so will reset the Fate Points to <span>0</span> and you will have to accumulate them again. <br/> \u203B The Fate Points for this Wish are only valid for the current period of Event Wish "Epitome Invocation". Once the Wish event is over, the number of Fate Points will reset to <span>0</span>, and you will have to accumulate them again',
    "4-Star Items",
    'For Event Wish "{bannerName}": Base probability of winning 4-star item = <span>6.000%</span>; base probability of winning 4-star character = <span>3.000%</span>, and base probability of winning 4-star weapon = <span>3.000%</span>; consolidated probability (incl. guarantee) of winning 4-star item = <span>14.500%</span>; guaranteed to win 4-star or above item at least once per <span>10</span> attempts; probability of winning 4-star item through the guarantee = <span>99.300%</span>, and probability of winning 5-star item through the guarantee = <span>0.700%</span>. <br/> The first time you win a 4-star item in this event wish, there is a <span>75.000%</span> chance it will be one of the featured weapons {rateupWeapons}. If the first 4-star item you win in this event wish is not one of the featured weapons, then the next 4-star item you win is <span>guaranteed</span> to be a featured weapon. When you win a featured 4-star item, the probability of obtaining each featured 4-star weapon is equal between all of them.'
  ],
  convertion: {
    fiveStar: "5-Star weapons won in this wish come with {starglitter} \xD710;",
    fourStar: "4-star weapons won in this wish come with {starglitter} \xD72;",
    threeStar: "3-star weapons won in this wish come with {stardust} \xD715."
  },
  duplicate: {
    heading: "\u3013Duplicate Characters\u3013",
    text: "On obtaining a {rarity}-Star character that you already own (whether obtained in a wish, redeemed at the shop, or awarded by the game): The 2nd - 7th time you obtain the character, it will be converted into that character's {stellaFortuna} \xD71 and {starglitter} {constBonus}; from the 8th time onwards it will be converted into {starglitter} {fullConstBonus}."
  }
};
const history = {
  title: "Wish History",
  text: "History",
  resetButton: "Clear",
  resetPromptTitle: "Clear History ?",
  resetPrompt: 'Are You Sure to Remove the Characters and Weapons related to "{bannerName}" Banner from your Inventory.',
  resetSuccess: "Reset Successful !",
  keepPity: "Don't reset Pity and Guaranteed Status",
  selectWish: "Select Wish Type:",
  disclaimer: "We Never save your data on cloud storage. All data was stored to IndexedDB, it means the data is saved on your browser storage. It will never delete till you delete it manualy through delete/reset button or clear the browser data.",
  currentPity: "Current Pity :",
  totalPull: "Total Pulls :",
  totalSpend: "Total Spent :",
  filterTxt: "Filter",
  filter: "{rarity} Star",
  filterAll: "All",
  pity: "Pity",
  timeReceived: "Time Received",
  waiting: "Waiting",
  noData: "No data available .",
  untracked: "Untracked",
  item: "Item",
  win: "Win 50/50",
  lose: "Lose 50/50",
  guaranteed: "Guaranteed",
  selected: "Selected Weapon",
  olderLayout: "Older Layout",
  switchv2: "Switch to V2"
};
const shop = {
  text: "Shop",
  paimonBargains: "Paimon Bargains",
  fateNeeded: "An Aditional {rollQty} {currency} are needed.",
  primoNeeded: "Purchase with {primoPrice} Primogem ?",
  purchaseUpto: "Purchase Up to 1",
  purchaseConfirm: "Purchase Confirmation",
  exchangeHeading: "Item To Exchange",
  purchaseHeading: "Item To Purchase",
  purchaseButton: "Purchase",
  pay: "Pay",
  product: "Product",
  consume: "Consume",
  selectPayment: "Select Payment Type",
  unrealWallet: "UnReal Wallet",
  convertPrimo: " Auto convert to primogem ?",
  proceedPayment: "Proceed Payment",
  qty: "Qty",
  insufficient: "Insufficient Funds",
  crystalTopup: "Crystal Top-Up",
  initialBonus: "Initial Topup Bonus",
  bonus: "Bonus",
  buyGenesisHeading: "Buy Genesis Crystal",
  recomendedHeading: "Recommended Items",
  paimonHeading: "Paimon's Bargains",
  welkinNote: "Can be purchased multiple times",
  limitedOffer: "Limited Time Offer",
  noLimitTime: "No Limit time items available",
  paymentChilde: "Childe",
  paymentTears: "Tears",
  paymentWakaranai: "Wakaranai",
  recomended: {
    welkin: "Blessing of the Welkin Moon",
    newOutfit: "New Character Outfits",
    dayRemaining: "Days remaining: {days}",
    alreadyClaimed: "Already Claimed today",
    instantlyGet: "Instantly Get",
    dailyGift: "Daily Gift",
    obtainTotal: "Obtain a total {totalGenesis} Genesis Crystal and {totalPrimo} Primogems across 30 days",
    claimingBlessing: "Click to claim your daily Blessing of the Welkin Moon rewards",
    issuedPurchase: "Issued on purchase",
    collect: "Collect daily login rewards for 30 days"
  },
  exchange: {
    starglitter: "Starglitter Exchange",
    stardust: "Stardust Exchange",
    primogem: "Exchange with Primogems"
  },
  item: {
    genesis: "Genesis Crystal",
    primogem: "Primogem",
    intertwined: "Intertwined Fate",
    acquaint: "Acquaint Fate",
    starglitter: "Masterless Starglitter",
    stardust: "Masterless Stardust"
  },
  description: {
    intertwined: "A fateful stone that connects dreams. Its glimmers can entwine fates and connect dreams, just as how its glimmer links stars into the shapes of a heart's desires.",
    acquaint: "A seed that lights up the night. No matter the distance apart, guided by the stone's glimmer, the fated will meet under the stars."
  }
};
const inventory = {
  text: "Inventory",
  unsetOutfit: "Unset Outfit",
  setOutfit: "Set Outfit to Character",
  refinement: "Refinement {count}",
  constellation: "Constellation {count}",
  extra: "{count} Extra",
  firstSummon: "First Summoned at : {date}",
  notOwned: "Not Owned",
  sort: "Sort",
  rarity: "Rarity",
  name: "Name",
  quantity: "Quantity",
  element: "Element",
  release: "Release Date",
  type: "Type",
  owned: "Owned",
  showAllOption: "Show All {item}s"
};
const menu = {
  no: "No",
  yes: "Yes",
  text: "Menu",
  feedback: "Feedback",
  options: "Options",
  updates: "Update History",
  customBanner: "Custom Banner",
  backupRestore: "Backup & Restore",
  language: "Language",
  currency: "Currency",
  fates: "Number of Wishes",
  unlimited: "Unlimited",
  manual: "Manual Input",
  mute: "Mute Audio and Sound Effect",
  switchBanner: "Switch Banner",
  showAllitems: "Show all items on Inventory",
  autoskip: "Auto Skip Splash Art",
  animatedbg: "Animated Background",
  multiRoll: "Number per multi-roll",
  factoryReset: "Clear Data and Restore Default",
  resetTitle: "Factory Reset",
  rotate: "Rotate for better experience",
  keepSetting: "Keep Settings? <small> Current Pity, Balance and the Settings will not be deleted </small>",
  clearCache: "Clear Caches ( {size} ) ? <small> You will re-load the cached assets after this action</small>",
  resetButton: "Reset Now",
  resetPrompt: "Are You sure to clear <strong> All Data </strong> and restore to default ?",
  resetSuccess: "Reset Successful",
  proAccess: "Pro Access",
  getpro: "Get Pro Access",
  removeKey: "Remove Key",
  removeKeyConfirm: "Are you sure to delete the current Key? You will lose all of these benefits until you re-enter the new key!",
  getNewKey: "Get a new one Here!",
  noKey: "Don't have a key?",
  verifyFail: "Failed to verifying Access Key, Check your Connection !",
  invalidKey: "Your key is invalid",
  keyExpired1: "Expired Key!",
  keyExpired2: 'Your key: "{key}" has expired since {date}!',
  adFreeUser: "You already have access to the pro features!",
  inputKeyPlaceholder: "Enter Key",
  inputKeyTxt: "Input a Key to get more Benefits !",
  checkingKey: "Verifying Stored Access Key",
  authorNotes: "* I need to say sorry about the ads. Actually I don't want to ruin your wishing experience, but I don't have any Team or Sponsor to keep this app alive. If you don't want to spend anythings, You can still turn on the Ad Blocker or just use custom DNS, I will not forbid you."
};
const enUS = {
  title,
  character,
  weapon,
  vision,
  anemo,
  cryo,
  dendro,
  electro,
  hydro,
  geo,
  pyro,
  bow,
  catalyst,
  claymore,
  sword,
  polearm,
  extra,
  obtained,
  waiting,
  connectionFailed,
  confirmButton,
  cancelButton,
  disclaimer,
  fanmade,
  pressToContinue,
  installInstruction,
  share,
  screenshot,
  capturing,
  rewardFirstShare,
  version,
  donate,
  banner,
  editor,
  customBanner,
  backupRestore,
  wish,
  outfit,
  details,
  history,
  shop,
  inventory,
  menu
};
export {
  anemo,
  backupRestore,
  banner,
  bow,
  cancelButton,
  capturing,
  catalyst,
  character,
  claymore,
  confirmButton,
  connectionFailed,
  cryo,
  customBanner,
  enUS as default,
  dendro,
  details,
  disclaimer,
  donate,
  editor,
  electro,
  extra,
  fanmade,
  geo,
  history,
  hydro,
  installInstruction,
  inventory,
  menu,
  obtained,
  outfit,
  polearm,
  pressToContinue,
  pyro,
  rewardFirstShare,
  screenshot,
  share,
  shop,
  sword,
  title,
  version,
  vision,
  waiting,
  weapon,
  wish
};
