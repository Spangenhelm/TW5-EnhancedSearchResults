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
port="8081"

################################################################################
# Program
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

cp -f "${demoSrcRootPath}/tiddlywiki.info.nodejs" "${demoSrcRootPath}/tiddlywiki.info"

echo "using:"
echo
cat "${demoSrcRootPath}/tiddlywiki.info"

#====================================================================
printf "\nStarting server on port $port\n"
#====================================================================

node $interpreterMain $demoSrcRootPath --verbose --server $port