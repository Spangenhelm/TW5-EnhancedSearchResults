#!/bin/bash

################################################################################
# Script Configuration
################################################################################

interpreterRoot="./node_modules/tiddlywiki/"
interpreterMain="${interpreterRoot}/tiddlywiki.js"
pluginDistPath="../master/dist/"
pluginAuthor="spangenhelm"
pluginTitle="enhancedsearch"
demoSrcRootPath="./src/"
demoOutputPath="./"

################################################################################
# Runtime
################################################################################

#====================================================================
printf "\nLocally installing tiddlywiki and linking to the plugin\n"
#====================================================================

if ! [ -f "$interpreterMain" ]; then
  echo 
  echo "The file '$interpreterMain' does *not* exists"
  echo "Please make sure the script's wikiRoot path points to a valid tiddlywiki.js"
  echo "Hint: Execute 'npm install tiddlywiki'"
  exit 1
fi

lnDest="${interpreterRoot}/plugins/${pluginAuthor}"
mkdir -p "$lnDest"
ln -s -r "$pluginDistPath" "$lnDest/${pluginTitle}"

#====================================================================
printf "\nPreparing tiddlywiki.info\n"
#====================================================================

cp -f "$demoSrcRootPath/tiddlywiki.info.single" "$demoSrcRootPath/tiddlywiki.info"

echo "using:"
echo
cat "$demoSrcRootPath/tiddlywiki.info"

#===============================================================================
printf "Building demo\n"
#===============================================================================

node $interpreterMain $demoSrcRootPath --verbose --output $demoOutputPath --build

exit 0