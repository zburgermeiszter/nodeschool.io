function getDependencies(tree) {
    if(typeof tree === 'object' && tree.hasOwnProperty('dependencies')) {
        var deps = tree['dependencies'];

        var depNameArray = [];

        Object.getOwnPropertyNames(deps).forEach(function(depName) {
            //console.log(depName + "@" + deps[depName]['version']);
            var depWithVersion = depName + "@" + deps[depName]['version'];
            depNameArray.push(depWithVersion);

            getDependencies(deps[depName]).forEach(function(depWithVersionFromRecursion) {
                depNameArray.push(depWithVersionFromRecursion);
            });
        });

        return depNameArray.sort().filter(function(elem, index, self) {
            return self.indexOf(elem) === index
        });
    }

    return [];
}

module.exports = getDependencies;