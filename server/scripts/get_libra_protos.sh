#!/bin/bash
# Finds and copies Libra proto files into a single directory
# Modifies certain proto files to change import statements
# Builds typescript declarations and grpc service declarations

if [ -z "$LIBRA" ]; then
    echo "\$LIBRA environment variable missing."
    echo "Please set \$LIBRA to the Libra Core root path"
    exit 1
fi

source_dir=$(pwd)
protoc_gen_ts_path="./node_modules/.bin/protoc-gen-ts"
out_dir="libra_proto"
mkdir -p $out_dir
rm -rf ./$out_dir/*

echo "Copying Libra protobuf files..."
find $LIBRA -name "*.proto" \
    -execdir echo "Copying {}" \; \
    -execdir cp "{}" "$source_dir/libra_proto" \; \
    -execdir sed -i '' 's#import \"shared/#import \"#g' "$source_dir/libra_proto/{}" \;

echo "Building proto js/ts files" 
find "libra_proto" -name "*.proto" \
    -execdir echo "Building {}" \; \
    -execdir protoc \
        --plugin="protoc-gen-ts=${protoc_gen_ts_path}" \
        --js_out="import_style=commonjs,binary:${out_dir}" \
        --ts_out="service=true:${out_dir}" \
        --grpc_out="libra_proto" 
        --plugin=protoc-gen-grpc="$NUGET/packages/grpc.tools/$grpctoolsvr/tools/$grpctoolsos/grpc_csharp_plugin" \
        "{}" \;