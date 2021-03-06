#!/bin/bash
# Finds and copies Libra proto files into a single directory
# Modifies certain proto files to change import statements to reflect a single directory
# Modifies double, uint64, int64, fixed64, sint64, sfixed64 to use jstype JS_STRING per https://www.npmjs.com/package/ts-protoc-gen#gotchas
# Builds typescript declarations and grpc service declarations

if [ -z "$LIBRA" ]; then
    echo "\$LIBRA environment variable missing."
    echo "Please set \$LIBRA to the Libra Core root path"
    exit 1
fi

source_dir=$(pwd)
protoc_gen_ts_path="./node_modules/.bin/protoc-gen-ts"
out_dir="common/libra_protos"
mkdir -p $out_dir
rm -rf ./$out_dir/*

echo "Copying Libra protobuf files..."
find "$LIBRA" -name "*.proto" -execdir echo "Copying {}" \; -execdir cp "{}" "$source_dir/$out_dir" \;

find "$source_dir/$out_dir" -name "*.proto" \
    -execdir echo "Modifying import tags for {}" \; \
    -execdir sed -i '' 's#import \"shared/#import \"#g' "{}" \; \
    -execdir echo "Appending jstypes to {}" \; \
    -execdir sed -i '' -E 's/(double.*|uint64.*|int64.*|fixed64.*|sint64.*|sfixed64.*);/\1\ [jstype = JS_STRING\];/g' "$source_dir/$out_dir/{}" \;


echo "Building proto js files" 
grpc_tools_node_protoc \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    --grpc_out=$source_dir/$out_dir \
    --js_out=import_style=commonjs,binary:$source_dir/$out_dir \
    -I $source_dir/$out_dir \
    $source_dir/$out_dir/*.proto

echo "Building proto d.ts files" 
protoc \
    --plugin=protoc-gen-ts=$protoc_gen_ts_path \
    --ts_out=$source_dir/$out_dir \
    -I $source_dir/$out_dir \
    $source_dir/$out_dir/*.proto