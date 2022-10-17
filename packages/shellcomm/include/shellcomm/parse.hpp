#ifndef _SHELLCOMM_PARSE_
#define _SHELLCOMM_PARSE_

namespace shellcomm {

enum mode {
  MODE_UNKNOWN = 0,
  MODE_WEBVIEW = 1
};

struct parse_result {
  mode mode;
};

bool parse(int argc, const char **argv, parse_result *result);

} // namespace shellcomm

#endif /* _SHELLCOMM_PARSE_ */
