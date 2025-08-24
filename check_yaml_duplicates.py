import sys
import yaml

class UniqueKeyLoader(yaml.SafeLoader):
    pass

def construct_mapping(loader, node, deep=False):
    mapping = {}
    for key_node, value_node in node.value:
        key = loader.construct_object(key_node, deep=deep)
        if key in mapping:
            raise yaml.constructor.ConstructorError(
                "while constructing a mapping",
                node.start_mark,
                f"found duplicate key ({key})",
                key_node.start_mark,
            )
        value = loader.construct_object(value_node, deep=deep)
        mapping[key] = value
    return mapping

UniqueKeyLoader.add_constructor(
    yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG,
    construct_mapping,
)

def check_yaml(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            yaml.load(f, Loader=UniqueKeyLoader)
        print(f"✅ No duplicate keys found in {file_path}")
    except yaml.constructor.ConstructorError as e:
        print(f"❌ Duplicate key found in {file_path}:")
        print(e)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python check_yaml_duplicates.py <config.yml>")
        sys.exit(1)
    check_yaml(sys.argv[1])
