// Bigger Map Mod

// Define Mod Function to get API
function biggerMapMod(api){
	// Bigger Map
	
	// Set the X and Y number of tiles
	// Normal is 30 x 30
	api.registries.mapLayout.findById("tutorial").__proto__.getNumTilesX = function(){return 113};
	api.registries.mapLayout.findById("tutorial").__proto__.getNumTilesY = function(){return 113};
	api.registries.mapLayout.findById("desert").__proto__.getNumTilesX = function(){return 188};
	api.registries.mapLayout.findById("desert").__proto__.getNumTilesY = function(){return 188};
	api.registries.mapLayout.findById("ice").__proto__.getNumTilesX = function(){return 90};
	api.registries.mapLayout.findById("ice").__proto__.getNumTilesY = function(){return 90};
	
	// Set Resource Count Multiplier
	// Note : To have the same ammount of resource density you need to take your (X * Y) devided by (40 * 40). Set this as the resource multiplier.
	// For Example : (150 * 150)/(40 * 40) = ~14
	var resourceCountMult = 14;
	
	// Set Resource counts. Take normal values and multiply by resource count multiplier
	api.registries.mapLayout.findById("tutorial").__proto__.getResourceCounts = function(){return {
		crystal: 12 * resourceCountMult,
		tree: 19 * resourceCountMult,
    rock: 9 * resourceCountMult,
    ironore: 7 * resourceCountMult,
    coalore: 5 * resourceCountMult,
    uraniumore: 3 * resourceCountMult
  }};

	api.registries.mapLayout.findById("desert").__proto__.getResourceCounts = function(){return {
		crystal: 11 * resourceCountMult,
		tree: 10 * resourceCountMult,
    rock: 16 * resourceCountMult,
    ironore: 7 * resourceCountMult,
    coalore: 7 * resourceCountMult,
    uraniumore: 4 * resourceCountMult
  }};

	api.registries.mapLayout.findById("ice").__proto__.getResourceCounts = function(){return {
		crystal: 6 * resourceCountMult,
		tree: 4 * resourceCountMult,
    rock: 4 * resourceCountMult,
    ironore: 2 * resourceCountMult,
    coalore: 1 * resourceCountMult,
    uraniumore: 1 * resourceCountMult
  }};

	// Define mod implementation function to get root
    function moreZoom(root){
        // Set minimum zoom
        // Note : the api.gameConfig minimumZoom is not currently used. Although it might get added, which would make this code smaller.
        root.app.platformWrapper.getMinimumZoom = function(){return 0.2};
    }
    
    // Register mod implementation
    api.registerModImplementation(moreZoom);
}

// Register The Mod
window.registerMod(biggerMapMod);
