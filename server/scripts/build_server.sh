#!/bin/bash
# Builds the server for Aquarius-Wallet

out_dir="./dist/"
mkdir -p $out_dir
rm -rf ./$out_dir/*
tsc