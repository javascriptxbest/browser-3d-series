git checkout gh-pages || git checkout -b gh-pages || exit 1
git reset --hard main
mkdir output
mkdir output/hello-world
cd hello-world
yarn
yarn generate
cp -r dist/. ../output/hello-world
cd ..
rm -rf hello-world
mv output/* .
rm -rf output
rm pages.sh
git add .
git commit -m "update pages"
git push -u origin gh-pages