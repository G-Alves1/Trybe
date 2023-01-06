import platform

print(
    f"System: {platform.system()}\n"
    f"Release: {platform.release()}"
    f"Archtecture: {platform.architecture()[0]}\n"
)