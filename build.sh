export PROD_DIR=prod_dist
export PROD_DIST_PATH=server/${PROD_DIR}

cd drone-ui
ng build --prod
cd -
rm -rf $PROD_DIST_PATH
mkdir -p $PROD_DIST_PATH
cp -r drone-ui/dist/DroneInterface/* $PROD_DIST_PATH
